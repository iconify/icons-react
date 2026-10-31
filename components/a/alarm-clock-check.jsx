import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/glq-1qbjg.css';
import '../../css/m/m6t70kb9t.css';
import '../../css/l/lztux4j4y.css';
import '../../css/v/vpdai5bsv.css';
import '../../css/o/oc8o0iacg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="glq-1qbjg"/><path class="m6t70kb9t wm-shine"/><path class="lztux4j4y wm-k"/><path class="vpdai5bsv wm-a"/><path class="oc8o0iacg wm-s"/></g>`,
		"fallback": "withicons-kawaii:alarm-clock-check",
	});
}

export default Component;
