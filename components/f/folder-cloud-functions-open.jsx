import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuf42lb8e.css';
import '../../css/g/gl4q78pmt.css';
import '../../css/x/xfa05jozk.css';
import '../../css/p/pp61lnbnp.css';
import '../../css/p/pib4fob9v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kuf42lb8e"><defs><path id="SVGQNnMjb8B" class="gl4q78pmt"/></defs><path class="xfa05jozk"/><path class="pp61lnbnp"/><use href="#SVGQNnMjb8B" transform="translate(0 -2)"/><use href="#SVGQNnMjb8B" transform="matrix(1 0 0 -1 0 40)"/><path class="pib4fob9v"/><use href="#SVGQNnMjb8B" transform="matrix(-1 0 0 1 46 -2)"/><use href="#SVGQNnMjb8B" transform="rotate(180 23 20)"/></g>`,
		"fallback": "material-icon-theme:folder-cloud-functions-open",
	});
}

export default Component;
