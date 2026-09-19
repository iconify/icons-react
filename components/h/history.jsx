import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mygz7wq_z.css';
import '../../css/j/jeu97sbwj.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mygz7wq_z"/><path class="jeu97sbwj"/></g>`,
		"fallback": "si-glyph:history",
	});
}

export default Component;
