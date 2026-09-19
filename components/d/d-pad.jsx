import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6ptorbxt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6ptorbxt"/>`,
		"fallback": "glyphs-poly:d-pad",
	});
}

export default Component;
