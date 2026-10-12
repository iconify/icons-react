import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhhtiybqt.css';
import '../../css/y/y3-35o4du.css';
import '../../css/z/zvmazhpzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nhhtiybqt"/><rect class="y3-35o4du"/><path class="zvmazhpzi"/></g>`,
		"fallback": "andrsrxn:battery-high",
	});
}

export default Component;
