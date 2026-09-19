import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl7j8ub1a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hl7j8ub1a"/>`,
		"fallback": "glyphs:camp-bold",
	});
}

export default Component;
