import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldkpy_bky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldkpy_bky"/>`,
		"fallback": "guidance:access-to-low-vision",
	});
}

export default Component;
