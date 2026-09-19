import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xr1zzs9rr.css';
import '../../css/k/kyshkjbdz.css';
import '../../css/n/n57yrcb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="xr1zzs9rr"/><path class="kyshkjbdz"/><path class="n57yrcb_e"/></g>`,
		"fallback": "iconamoon:attention-circle-thin",
	});
}

export default Component;
