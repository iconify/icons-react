import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xvbpfj4jl.css';
import '../../css/n/nw8oy7i7x.css';
import '../../css/a/amk28miip.css';
import '../../css/r/rwjf_mbsq.css';
import '../../css/z/zmq38_hyw.css';
import '../../css/l/l-8mu0bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xvbpfj4jl"/><path class="nw8oy7i7x"/><path class="amk28miip"/><path class="rwjf_mbsq"/><path class="zmq38_hyw"/><path class="l-8mu0bww"/></g>`,
		"fallback": "withicons-retro:baseball",
	});
}

export default Component;
