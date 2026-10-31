import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgtx0hbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgtx0hbdn"/>`,
		"fallback": "coolicons:cursor-bulk-round",
	});
}

export default Component;
