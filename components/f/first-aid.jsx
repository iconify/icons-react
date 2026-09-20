import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev0k3vk4p.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev0k3vk4p"/>`,
		"fallback": "medical-icon:first-aid",
	});
}

export default Component;
