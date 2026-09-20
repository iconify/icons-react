import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfe_d_2bd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfe_d_2bd"/>`,
		"fallback": "mdi:gas-station-in-use-outline",
	});
}

export default Component;
