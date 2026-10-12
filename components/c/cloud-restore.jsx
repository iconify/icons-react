import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfzh94b8z.css';
import '../../css/o/odjrbuxck.css';
import '../../css/y/yqwlv8s8f.css';
import '../../css/v/vh4lpy7mc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jfzh94b8z"/><path class="odjrbuxck"/><path class="yqwlv8s8f"/><path class="vh4lpy7mc"/></g>`,
		"fallback": "andrsrxn:cloud-restore",
	});
}

export default Component;
