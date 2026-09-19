import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu_l0pbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu_l0pbck"/>`,
		"fallback": "cbi:garden",
	});
}

export default Component;
