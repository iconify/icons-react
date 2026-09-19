import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9mh-6buz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9mh-6buz"/>`,
		"fallback": "glyphs:hand-horns",
	});
}

export default Component;
