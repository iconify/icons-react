import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn436cvro.css';
import '../../css/c/c110yw0hi.css';
import '../../css/w/wjocnli8d.css';
import '../../css/n/na4i35b7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yn436cvro"/><path class="c110yw0hi"/><path class="wjocnli8d"/><path class="na4i35b7t"/></g>`,
		"fallback": "andrsrxn:file-scan",
	});
}

export default Component;
