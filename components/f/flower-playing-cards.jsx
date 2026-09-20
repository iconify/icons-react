import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl_wy7rwg.css';
import '../../css/q/q59s5b1hh.css';
import '../../css/d/d-bxsqbdu.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/z37-eqavp.css';
import '../../css/g/gdrzy4b-b.css';
import '../../css/c/cvupwub_d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl_wy7rwg"/><circle class="q59s5b1hh"/><path class="d-bxsqbdu"/><g class="jn8qy4bru"><path class="z37-eqavp"/><circle class="gdrzy4b-b"/><path class="cvupwub_d"/></g>`,
		"fallback": "openmoji:flower-playing-cards",
	});
}

export default Component;
