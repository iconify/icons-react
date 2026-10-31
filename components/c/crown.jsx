import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nq7kavbaa.css';
import '../../css/t/tk37vwbag.css';
import '../../css/q/qtctpdfrf.css';
import '../../css/x/x_acth80j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nq7kavbaa wm-shadow"/><path class="tk37vwbag wm-shadow"/><path class="qtctpdfrf"/><path class="x_acth80j"/></g>`,
		"fallback": "withicons-brutal:crown",
	});
}

export default Component;
