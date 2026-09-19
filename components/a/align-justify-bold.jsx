import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obaevwb5x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obaevwb5x"/>`,
		"fallback": "glyphs:align-justify-bold",
	});
}

export default Component;
