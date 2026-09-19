import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ab2watbzi.css';
import '../../css/n/nvdrd7iyn.css';
import '../../css/b/b90ceybhx.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGHRixmjTz)" class="ab2watbzi"/><path fill="url(#SVG3MZrXcNv)" class="nvdrd7iyn"/><defs><linearGradient id="SVGHRixmjTz" x1="10.154" x2="23.584" y1="3" y2="7.391" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="g0pybxe0r"/></linearGradient><linearGradient id="SVG3MZrXcNv" x1="2.577" x2="16.964" y1="3" y2="8.131" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:food-20",
	});
}

export default Component;
