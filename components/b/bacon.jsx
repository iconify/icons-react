import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efuynsbsq.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efuynsbsq"/>`,
		"fallback": "fa6-solid:bacon",
	});
}

export default Component;
