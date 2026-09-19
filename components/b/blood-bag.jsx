import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c0w0gbbmk.css';
import '../../css/i/igivs8afy.css';
import '../../css/b/bjvdyzagy.css';
import '../../css/s/s4ttgicka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c0w0gbbmk"/><path class="igivs8afy"/><path class="bjvdyzagy"/><path class="s4ttgicka"/></g>`,
		"fallback": "hugeicons:blood-bag",
	});
}

export default Component;
