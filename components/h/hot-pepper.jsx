import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj4wj9bms.css';
import '../../css/c/cmhu-zbgt.css';
import '../../css/k/kb444_bmq.css';
import '../../css/v/vz-r9fb7b.css';
import '../../css/q/qlb572bjw.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/e/ehyuth8id.css';
import '../../css/p/pqv6o-b5m.css';
import '../../css/j/jj6yk8bgi.css';
import '../../css/i/iq5df4opx.css';
import '../../css/w/wyqvxxboz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="fj4wj9bms"><path class="cmhu-zbgt"/><path class="kb444_bmq"/><path class="vz-r9fb7b"/><path class="qlb572bjw"/></g><g class="x8poo_bjf"><path class="ehyuth8id"/><path class="pqv6o-b5m"/><path class="jj6yk8bgi"/><path class="iq5df4opx"/><path class="wyqvxxboz"/></g>`,
		"fallback": "openmoji:hot-pepper",
	});
}

export default Component;
