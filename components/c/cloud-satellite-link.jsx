import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unaljlb8v.css';
import '../../css/s/szt_lz6ub.css';
import '../../css/l/l71mrm8fk.css';
import '../../css/h/hh_hn2b_u.css';
import '../../css/m/m4ajnwsrg.css';
import '../../css/f/fjvik3r7u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unaljlb8v"/><path class="szt_lz6ub"/><circle class="l71mrm8fk"/><path class="hh_hn2b_u"/><circle class="m4ajnwsrg"/><path class="fjvik3r7u"/>`,
		"fallback": "carbon:cloud-satellite-link",
	});
}

export default Component;
