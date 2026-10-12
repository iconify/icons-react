import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ti_hxxb2l.css';
import '../../css/w/wti81nbmb.css';
import '../../css/k/kgz6fkdro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ti_hxxb2l"/><path class="wti81nbmb"/><path class="kgz6fkdro"/></g>`,
		"fallback": "andrsrxn:balloon",
	});
}

export default Component;
