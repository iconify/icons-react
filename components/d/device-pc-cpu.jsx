import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kv4o3fbbf.css';
import '../../css/v/vv_7hnbbp.css';
import '../../css/i/i4xshbbgd.css';
import '../../css/l/lawquj2sa.css';
import '../../css/j/jrza9n2pe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kv4o3fbbf"/><path class="vv_7hnbbp"/><path class="i4xshbbgd"/><path class="lawquj2sa"/><path class="jrza9n2pe"/></g>`,
		"fallback": "andrsrxn:device-pc-cpu",
	});
}

export default Component;
