import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci88u-2xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ci88u-2xr"/>`,
		"fallback": "solar:bag-2-bold",
	});
}

export default Component;
