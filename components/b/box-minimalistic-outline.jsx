import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz4rxo_yp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oz4rxo_yp"/>`,
		"fallback": "solar:box-minimalistic-outline",
	});
}

export default Component;
