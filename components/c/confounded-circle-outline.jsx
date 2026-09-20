import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sbgj8s2qu.css';
import '../../css/y/ydclubb8n.css';
import '../../css/e/e0x8zub8f.css';
import '../../css/i/iv54lq1yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sbgj8s2qu"/><path class="ydclubb8n"/><path class="e0x8zub8f"/><path class="iv54lq1yw"/></g>`,
		"fallback": "solar:confounded-circle-outline",
	});
}

export default Component;
