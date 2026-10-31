import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i4j6zo-xu.css';
import '../../css/h/hkrckrxuc.css';
import '../../css/t/tc0gqmbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="i4j6zo-xu wm-shadow"/><path class="hkrckrxuc wm-shadow"/><path class="tc0gqmbgx"/></g>`,
		"fallback": "withicons-brutal:cupid-bow",
	});
}

export default Component;
