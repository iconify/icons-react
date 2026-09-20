import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/std8ps_jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="std8ps_jm"/>`,
		"fallback": "reicon:arrow-up-2-filled",
	});
}

export default Component;
