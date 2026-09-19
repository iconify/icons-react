import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jze5oiupp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jze5oiupp"/>`,
		"fallback": "glyphs:hand-holding-outline",
	});
}

export default Component;
