import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwzq31xlc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwzq31xlc"/>`,
		"fallback": "mdi:electronic-stability-program",
	});
}

export default Component;
