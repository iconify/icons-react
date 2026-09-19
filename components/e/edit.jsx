import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5racfbmg.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5racfbmg"/>`,
		"fallback": "fa-solid:edit",
	});
}

export default Component;
