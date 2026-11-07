import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4m3l0b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k4m3l0b9v"/>`,
		"fallback": "solar:basketball-outline",
	});
}

export default Component;
