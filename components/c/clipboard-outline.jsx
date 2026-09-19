import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqb2u5bqj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jqb2u5bqj"/>`,
		"fallback": "glyphs:clipboard-outline",
	});
}

export default Component;
