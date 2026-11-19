import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/w/wng9gxbpa.css';
import '../../css/c/c0m_-7bgb.css';
import '../../css/w/wja83cd6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="g2bmsqbnm"/><path class="wng9gxbpa"/><path class="c0m_-7bgb"/><path class="wja83cd6f"/></g>`,
		"fallback": "andrsrxn:dot-circle-out",
	});
}

export default Component;
