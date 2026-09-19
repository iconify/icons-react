import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0rgi2_1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0rgi2_1j"/>`,
		"fallback": "bxl:express-js",
	});
}

export default Component;
