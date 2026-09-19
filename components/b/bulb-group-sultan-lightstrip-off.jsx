import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqae0sbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqae0sbov"/>`,
		"fallback": "cbi:bulb-group-sultan-lightstrip-off",
	});
}

export default Component;
