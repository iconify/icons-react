import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjvk998zw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjvk998zw"/>`,
		"fallback": "glyphs-poly:ampersand-1",
	});
}

export default Component;
