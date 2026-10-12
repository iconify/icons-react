import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sy5bpmbsm.css';
import '../../css/s/skfrh4bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sy5bpmbsm"/><path class="skfrh4bub"/></g>`,
		"fallback": "andrsrxn:forward",
	});
}

export default Component;
