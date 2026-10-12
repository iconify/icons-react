import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av-3gi9ts.css';
import '../../css/n/n57wrcbov.css';
import '../../css/c/c-9z_d0bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="av-3gi9ts"/><rect class="n57wrcbov"/><path class="c-9z_d0bn"/></g>`,
		"fallback": "andrsrxn:device-pc",
	});
}

export default Component;
