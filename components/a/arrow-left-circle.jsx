import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l6wvh8_6j.css';
import '../../css/i/if1j1ik3f.css';
import '../../css/a/ao8xynqyd.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l6wvh8_6j"/><path class="if1j1ik3f"/><path class="ao8xynqyd"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:arrow-left-circle",
	});
}

export default Component;
