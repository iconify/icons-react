import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dccnkcb-b.css';
import '../../css/t/tkjsm9b-m.css';
import '../../css/g/gxwvkccae.css';
import '../../css/i/ikv4mwb_l.css';
import '../../css/x/x4lu_pb5s.css';
import '../../css/l/l4j6vnbos.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dccnkcb-b"/><path class="tkjsm9b-m"/><path class="gxwvkccae"/><path class="ikv4mwb_l"/><path class="x4lu_pb5s"/><path class="l4j6vnbos"/></g>`,
		"fallback": "fluent-emoji-flat:abacus",
	});
}

export default Component;
