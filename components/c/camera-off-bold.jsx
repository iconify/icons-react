import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbaru3trv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hbaru3trv"/>`,
		"fallback": "solar:camera-off-bold",
	});
}

export default Component;
