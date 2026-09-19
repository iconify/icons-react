import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2n6oj1vc.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2n6oj1vc"/>`,
		"fallback": "fa6-brands:android",
	});
}

export default Component;
