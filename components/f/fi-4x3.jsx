import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5vgbcb_s.css';
import '../../css/t/t_skhdcko.css';
import '../../css/p/phnpi3grn.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5vgbcb_s"/><path class="t_skhdcko"/><path class="phnpi3grn"/>`,
		"fallback": "flag:fi-4x3",
	});
}

export default Component;
