import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jx6yqbbhl.css';
import '../../css/s/smmxe_bdk.css';
import '../../css/h/hfshdjlhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jx6yqbbhl"/><path class="smmxe_bdk"/><path class="hfshdjlhh"/></g>`,
		"fallback": "iconoir:hot-air-balloon",
	});
}

export default Component;
