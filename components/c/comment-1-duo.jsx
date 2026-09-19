import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5d4-v8al.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5d4-v8al"/>`,
		"fallback": "glyphs:comment-1-duo",
	});
}

export default Component;
