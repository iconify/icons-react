import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/foqcwkxxx.css';
import '../../css/a/axc7lmbxf.css';
import '../../css/z/zx82qk7ah.css';
import '../../css/l/l2-cklbof.css';
import '../../css/g/gihbtmmuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="foqcwkxxx"/><path class="axc7lmbxf"/><path class="zx82qk7ah"/><path class="l2-cklbof"/><path class="gihbtmmuc"/></g>`,
		"fallback": "streamline-cyber-color:cloud-flash",
	});
}

export default Component;
