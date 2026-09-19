import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwofbwblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwofbwblm"/>`,
		"fallback": "boxicons:home-alt-3-filled",
	});
}

export default Component;
