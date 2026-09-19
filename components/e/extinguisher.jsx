import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm7dvmcxp.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm7dvmcxp"/>`,
		"fallback": "si-glyph:extinguisher",
	});
}

export default Component;
