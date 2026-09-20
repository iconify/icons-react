import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu3p-s68u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu3p-s68u"/>`,
		"fallback": "keyline-icons:fullscreen-exit-sharp-fill",
	});
}

export default Component;
