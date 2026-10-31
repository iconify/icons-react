import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qp7s12n9q.css';
import '../../css/g/ggydu-ymh.css';
import '../../css/n/noycn-pgy.css';
import '../../css/q/qc72m0b1u.css';
import '../../css/q/qul_n1b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qp7s12n9q wm-shadow"/><path class="ggydu-ymh"/><path class="noycn-pgy"/><path class="qc72m0b1u"/><path class="qul_n1b-e"/></g>`,
		"fallback": "withicons-retro:align-top",
	});
}

export default Component;
