import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz0f_-b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zz0f_-b2x"/>`,
		"fallback": "solar:fuel-bold",
	});
}

export default Component;
