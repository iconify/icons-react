import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l12kxsblx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l12kxsblx"/>`,
		"fallback": "uim:css3",
	});
}

export default Component;
