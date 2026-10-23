import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebkt5ob7r.css';
import '../../css/s/svr33jeab.css';
import '../../css/c/cr7n80bgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ebkt5ob7r"/><path class="svr33jeab"/><path class="cr7n80bgj"/></g>`,
		"fallback": "andrsrxn:chair-gaming",
	});
}

export default Component;
