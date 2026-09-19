import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v-nzh1bvq.css';
import '../../css/d/dlzxc85ng.css';
import '../../css/c/cwd5_kbfh.css';
import '../../css/p/p6ql-ubmf.css';
import '../../css/m/mfxvgfsyi.css';
import '../../css/y/yjo4fcckv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="v-nzh1bvq"/><path class="dlzxc85ng"/><path class="cwd5_kbfh"/><ellipse class="p6ql-ubmf"/><path class="mfxvgfsyi"/><path class="yjo4fcckv"/></g>`,
		"fallback": "hugeicons:coins-01",
	});
}

export default Component;
