import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9pzv_bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9pzv_bfx"/>`,
		"fallback": "mynaui:alarm-smoke-solid",
	});
}

export default Component;
