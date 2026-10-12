import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o6c3wgbye.css';
import '../../css/e/euf2p35ep.css';
import '../../css/z/znk7n2t-o.css';
import '../../css/g/gw7af6bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="o6c3wgbye"/><rect transform="rotate(-90 2.01 9)" class="euf2p35ep"/><rect class="znk7n2t-o"/><path class="gw7af6bcx"/></g>`,
		"fallback": "andrsrxn:dashboard",
	});
}

export default Component;
