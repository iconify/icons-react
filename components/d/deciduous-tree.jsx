import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrhbj8boa.css';
import '../../css/p/pxi68155h.css';
import '../../css/z/z04drlb1l.css';
import '../../css/z/zi5n31bru.css';
import '../../css/f/fex84958v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrhbj8boa"/><path class="pxi68155h"/><g class="z04drlb1l"><path class="zi5n31bru"/><path class="fex84958v"/></g>`,
		"fallback": "openmoji:deciduous-tree",
	});
}

export default Component;
