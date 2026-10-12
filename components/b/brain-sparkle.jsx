import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhbpusbsw.css';
import '../../css/f/fnqp5ja6e.css';
import '../../css/r/rhc-rgb9d.css';
import '../../css/k/kyx974bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nhbpusbsw"/><path class="fnqp5ja6e"/><path class="rhc-rgb9d"/><path class="kyx974bkf"/></g>`,
		"fallback": "andrsrxn:brain-sparkle",
	});
}

export default Component;
