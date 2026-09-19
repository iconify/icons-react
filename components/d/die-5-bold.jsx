import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbt0vhszc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hbt0vhszc"/>`,
		"fallback": "glyphs:die-5-bold",
	});
}

export default Component;
