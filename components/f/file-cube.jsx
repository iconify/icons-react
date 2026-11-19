import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpr9fpbng.css';
import '../../css/j/jyxh05bww.css';
import '../../css/j/j1zomcb9f.css';
import '../../css/n/n1ox7wpzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hpr9fpbng"/><path class="jyxh05bww"/><path class="j1zomcb9f"/><path class="n1ox7wpzu"/></g>`,
		"fallback": "andrsrxn:file-cube",
	});
}

export default Component;
