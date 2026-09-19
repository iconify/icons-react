import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w-_b78bpw.css';
import '../../css/d/dw1ryfpfn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><filter id="SVGhQBVIeTv" color-interpolation-filters="auto"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter></defs><g class="bi12bsetm"><circle class="w-_b78bpw"/><g filter="url(#SVGhQBVIeTv)"><path class="dw1ryfpfn"/></g></g>`,
		"fallback": "cryptocurrency-color:grt",
	});
}

export default Component;
