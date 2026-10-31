import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9afo1r9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9afo1r9g"/>`,
		"fallback": "coolicons:arrow-down-right-bulk-round",
	});
}

export default Component;
