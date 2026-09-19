import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qab7_jb8p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qab7_jb8p"/>`,
		"fallback": "glyphs:die-1-bold",
	});
}

export default Component;
