import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mas2u-b0z.css';
import '../../css/u/u2y7rxb9t.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mas2u-b0z"/><path class="u2y7rxb9t"/>`,
		"fallback": "medical-icon:i-waiting-area",
	});
}

export default Component;
