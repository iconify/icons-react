import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m8932utjo.css';
import '../../css/z/z7s7gzs3d.css';
import '../../css/j/jn6vfebhm.css';
import '../../css/r/ro21uzgez.css';
import '../../css/i/if22erdpj.css';
import '../../css/n/nng6jtbav.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m8932utjo"/><path class="z7s7gzs3d"/><path class="jn6vfebhm"/><path class="ro21uzgez"/><path class="if22erdpj"/><path class="nng6jtbav"/></g>`,
		"fallback": "flagpack:cx",
	});
}

export default Component;
