import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5eak3k2p.css';
import '../../css/w/wkp122bpd.css';
import '../../css/k/k5sbk1u4q.css';
import '../../css/p/pxqahlbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l5eak3k2p"><circle class="wkp122bpd wm-shadow"/><circle class="k5sbk1u4q"/><circle class="pxqahlbbz wm-a"/></g>`,
		"fallback": "withicons-brutal:circle-dot",
	});
}

export default Component;
