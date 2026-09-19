import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nvjgaobrz.css';
import '../../css/u/uko0s9blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="nvjgaobrz"/><path class="uko0s9blw"/></g>`,
		"fallback": "hugeicons:dashboard-speed-02",
	});
}

export default Component;
