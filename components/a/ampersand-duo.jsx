import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf9onqh5v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf9onqh5v"/>`,
		"fallback": "glyphs:ampersand-duo",
	});
}

export default Component;
