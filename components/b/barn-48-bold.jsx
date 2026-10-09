import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcjwpo_yr.css';
import '../../css/k/kx_f_ebyd.css';
import '../../css/r/rqmuvbbga.css';
import '../../css/z/znx6igemc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcjwpo_yr"/><path class="kx_f_ebyd"/><path class="rqmuvbbga"/><path class="znx6igemc"/>`,
		"fallback": "energy-icons:barn-48-bold",
	});
}

export default Component;
