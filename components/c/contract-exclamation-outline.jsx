import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgo_ukb_m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgo_ukb_m"/>`,
		"fallback": "lsicon:contract-exclamation-outline",
	});
}

export default Component;
