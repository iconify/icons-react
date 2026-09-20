import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm-yfu1dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-yfu1dw"/>`,
		"fallback": "keyline-icons:dollar-sign-sharp-fill",
	});
}

export default Component;
