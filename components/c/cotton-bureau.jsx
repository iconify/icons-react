import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt_dwfbwm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt_dwfbwm"/>`,
		"fallback": "fa7-brands:cotton-bureau",
	});
}

export default Component;
