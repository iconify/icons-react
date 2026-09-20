import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj2vn1_gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj2vn1_gs"/>`,
		"fallback": "streamline-ultimate:charging-battery-empty",
	});
}

export default Component;
