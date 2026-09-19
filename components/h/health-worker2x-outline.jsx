import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uyd20qc5d.css';
import '../../css/x/x6syeybxm.css';
import '../../css/r/r1na0qb3v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uyd20qc5d"/><path class="x6syeybxm"/><path class="r1na0qb3v"/></g>`,
		"fallback": "healthicons:health-worker2x-outline",
	});
}

export default Component;
