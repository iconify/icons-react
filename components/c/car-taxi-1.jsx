import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fn9j1cbvv.css';
import '../../css/k/kqs5oj0_a.css';
import '../../css/p/pwn6rkb3q.css';
import '../../css/f/fvr0-fbym.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fn9j1cbvv"/><path class="kqs5oj0_a"/><path class="pwn6rkb3q"/><path class="fvr0-fbym"/></g>`,
		"fallback": "streamline-flex-color:car-taxi-1",
	});
}

export default Component;
