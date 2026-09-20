import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edfbzu34i.css';
import '../../css/g/gnew_18sz.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/q/qdpknuw4t.css';
import '../../css/u/u1f0yp2jn.css';
import '../../css/x/xio_otbwa.css';
import '../../css/r/r_lk4ubkj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edfbzu34i"/><path class="gnew_18sz"/><g class="jn8qy4bru"><path class="qdpknuw4t"/><path class="u1f0yp2jn"/><path class="xio_otbwa"/><path class="r_lk4ubkj"/></g>`,
		"fallback": "openmoji:boar",
	});
}

export default Component;
