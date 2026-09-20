import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmhcud6to.css';
import '../../css/y/yfndysjsy.css';
import '../../css/l/lm6n5prpc.css';
import '../../css/h/hmmsyrbns.css';
import '../../css/j/j7gp6cw4i.css';
import '../../css/a/a6abm2v_v.css';
import '../../css/m/m9uwu6zny.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmhcud6to"/><path class="yfndysjsy"/><path class="lm6n5prpc"/><path class="hmmsyrbns"/><path class="j7gp6cw4i"/><path class="a6abm2v_v"/><path class="m9uwu6zny"/>`,
		"fallback": "openmoji:black-bird",
	});
}

export default Component;
