import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttqym4bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttqym4bvk"/>`,
		"fallback": "mynaui:air-conditioner-solid",
	});
}

export default Component;
