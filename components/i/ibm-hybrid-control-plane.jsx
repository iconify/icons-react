import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2f_hbcuv.css';
import '../../css/s/s-sbgpere.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2f_hbcuv"/><path class="s-sbgpere"/>`,
		"fallback": "carbon:ibm-hybrid-control-plane",
	});
}

export default Component;
