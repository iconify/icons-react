import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz2fa8bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz2fa8bim"/>`,
		"fallback": "meteor-icons:box",
	});
}

export default Component;
