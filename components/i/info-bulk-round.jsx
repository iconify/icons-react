import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebt7lcckq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebt7lcckq"/>`,
		"fallback": "coolicons:info-bulk-round",
	});
}

export default Component;
