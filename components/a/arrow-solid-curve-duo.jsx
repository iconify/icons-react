import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr4wmez8s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr4wmez8s"/>`,
		"fallback": "glyphs:arrow-solid-curve-duo",
	});
}

export default Component;
