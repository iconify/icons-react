import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbm-3_bag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbm-3_bag"/>`,
		"fallback": "simple-icons:bunq",
	});
}

export default Component;
