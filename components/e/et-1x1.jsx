import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rml5m-dlt.css';
import '../../css/b/b067rs2mh.css';
import '../../css/q/qvs1e4brg.css';
import '../../css/u/u1b-dbc-r.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/k/k8o4s-rcj.css';
import '../../css/r/rlh32fbkn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVG5e2thwaP"><path class="rml5m-dlt"/></clipPath></defs><path class="b067rs2mh"/><path class="qvs1e4brg"/><path class="u1b-dbc-r"/><g clip-path="url(#SVG5e2thwaP)" transform="translate(-245.5 -14.1)scale(1.046)" class="nv9qcacyl"><circle transform="translate(204.7 77)scale(.515)" class="k8o4s-rcj"/><path class="rlh32fbkn"/></g>`,
		"fallback": "flag:et-1x1",
	});
}

export default Component;
