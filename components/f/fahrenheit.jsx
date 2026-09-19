import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v30e2vbps.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v30e2vbps"/>`,
		"fallback": "glyphs:fahrenheit",
	});
}

export default Component;
