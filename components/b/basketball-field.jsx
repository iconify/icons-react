import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sghf-qbbd.css';
import '../../css/k/kfqf88bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sghf-qbbd"/><path class="kfqf88bfw"/></g>`,
		"fallback": "iconoir:basketball-field",
	});
}

export default Component;
