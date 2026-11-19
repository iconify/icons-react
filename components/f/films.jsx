import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c991v8bpo.css';
import '../../css/q/qecy9o2su.css';
import '../../css/g/gh8ryolip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c991v8bpo"/><path class="qecy9o2su"/><path class="gh8ryolip"/></g>`,
		"fallback": "andrsrxn:films",
	});
}

export default Component;
