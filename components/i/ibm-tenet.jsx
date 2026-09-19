import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwlbj0b8j.css';
import '../../css/q/q1p1kwjdw.css';
import '../../css/m/m1y4hsbgq.css';
import '../../css/v/vh1dgbcue.css';
import '../../css/t/tzrsdpb2g.css';
import '../../css/m/mxv0-rl9y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwlbj0b8j"/><path class="q1p1kwjdw"/><circle class="m1y4hsbgq"/><circle class="vh1dgbcue"/><path class="tzrsdpb2g"/><path class="mxv0-rl9y"/>`,
		"fallback": "carbon:ibm-tenet",
	});
}

export default Component;
