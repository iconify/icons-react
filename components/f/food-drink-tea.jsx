import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2m6tab3g.css';
import '../../css/v/v799lmbxv.css';
import '../../css/v/vnf_fxb6n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2m6tab3g"/><path class="v799lmbxv"/><path class="vnf_fxb6n"/>`,
		"fallback": "streamline-pixel:food-drink-tea",
	});
}

export default Component;
