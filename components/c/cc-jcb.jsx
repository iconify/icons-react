import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v10r17syt.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v10r17syt"/>`,
		"fallback": "fa6-brands:cc-jcb",
	});
}

export default Component;
