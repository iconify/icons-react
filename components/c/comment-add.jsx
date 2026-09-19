import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtlmarb7m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtlmarb7m"/>`,
		"fallback": "glyphs:comment-add",
	});
}

export default Component;
