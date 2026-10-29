import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjpjvg_ri.css';
import '../../css/m/mpc3_pbvf.css';
import '../../css/f/fv51uwb0l.css';
import '../../css/m/mdl2mublf.css';
import '../../css/m/m0ko3dbtm.css';
import '../../css/a/avm-fjbfv.css';
import '../../css/j/jm65q1z0p.css';
import '../../css/e/ewd2hkbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjpjvg_ri wm-shadow"/><path class="mpc3_pbvf wm-k"/><path class="fv51uwb0l wm-k"/><path class="mdl2mublf wm-k"/><path class="m0ko3dbtm wm-k"/><path class="avm-fjbfv wm-k"/><path class="jm65q1z0p wm-shine"/><path class="ewd2hkbkl wm-a"/>`,
		"fallback": "withicons-pastel:croissant",
	});
}

export default Component;
