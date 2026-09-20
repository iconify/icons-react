import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc_clwuvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc_clwuvx"/>`,
		"fallback": "token:exodus",
	});
}

export default Component;
