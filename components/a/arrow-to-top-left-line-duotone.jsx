import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xcbzr4b0x.css';
import '../../css/t/tk938c4ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xcbzr4b0x"/><path class="tk938c4ke"/></g>`,
		"fallback": "solar:arrow-to-top-left-line-duotone",
	});
}

export default Component;
