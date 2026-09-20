import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfgx87blz.css';
import '../../css/r/r0n_h9woi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qfgx87blz"/><path class="r0n_h9woi"/></g>`,
		"fallback": "tdesign:battery",
	});
}

export default Component;
