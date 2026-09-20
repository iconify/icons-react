import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0m8trbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0m8trbfm"/>`,
		"fallback": "streamline-ultimate:car-3-bold",
	});
}

export default Component;
