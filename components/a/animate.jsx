import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuf42lb8e.css';
import '../../css/w/w4s_915po.css';
import '../../css/j/jo_-me8ej.css';
import '../../css/g/gr7z1enan.css';

const viewBox = {"width":1146,"height":1117};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kuf42lb8e"><path class="w4s_915po"/><path class="jo_-me8ej"/><path class="gr7z1enan"/></g>`,
		"fallback": "thesvg-color:animate",
	});
}

export default Component;
