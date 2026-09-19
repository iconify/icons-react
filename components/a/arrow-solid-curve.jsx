import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-7-8jbgk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-7-8jbgk"/>`,
		"fallback": "glyphs:arrow-solid-curve",
	});
}

export default Component;
