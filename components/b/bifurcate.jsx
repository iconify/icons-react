import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tfjtl-jwg.css';
import '../../css/q/quhvv9bmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tfjtl-jwg"/><path class="quhvv9bmq"/></g>`,
		"fallback": "tdesign:bifurcate",
	});
}

export default Component;
