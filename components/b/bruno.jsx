import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgqejvb_u.css';
import '../../css/j/jcx6hxbdf.css';
import '../../css/x/xrbve6iev.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgqejvb_u"/><path class="jcx6hxbdf"/><path class="xrbve6iev"/>`,
		"fallback": "devicon:bruno",
	});
}

export default Component;
