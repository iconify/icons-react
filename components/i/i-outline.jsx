import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or2sbebws.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or2sbebws"/>`,
		"fallback": "glyphs:i-outline",
	});
}

export default Component;
