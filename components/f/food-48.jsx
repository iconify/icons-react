import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tggxvjbpl.css';
import '../../css/e/e5_4jgb8o.css';
import '../../css/b/b90ceybhx.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGzjyc0chI)" class="tggxvjbpl"/><path fill="url(#SVGNUlG8cIy)" class="e5_4jgb8o"/><defs><linearGradient id="SVGzjyc0chI" x1="23.846" x2="57.911" y1="6.5" y2="17.839" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="g0pybxe0r"/></linearGradient><linearGradient id="SVGNUlG8cIy" x1="5.692" x2="41.659" y1="6.5" y2="19.327" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:food-48",
	});
}

export default Component;
