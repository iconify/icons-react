import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/o/oy5etvbmm.css';
import '../../css/x/xv_bkg14n.css';
import '../../css/c/cub3pspfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="oy5etvbmm"/><path class="xv_bkg14n"/><path class="cub3pspfw"/>`,
		"fallback": "fxemoji:grineyes",
	});
}

export default Component;
