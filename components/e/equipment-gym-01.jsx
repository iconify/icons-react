import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0erngb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0erngb9j"/>`,
		"fallback": "hugeicons:equipment-gym-01",
	});
}

export default Component;
