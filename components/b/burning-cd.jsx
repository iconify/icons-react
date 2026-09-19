import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y1usy_iqb.css';
import '../../css/x/xr_0osbry.css';
import '../../css/t/tr09_dpjp.css';
import '../../css/r/rxtn1lbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y1usy_iqb"/><path class="xr_0osbry"/><path class="tr09_dpjp"/><path class="rxtn1lbbw"/></g>`,
		"fallback": "hugeicons:burning-cd",
	});
}

export default Component;
