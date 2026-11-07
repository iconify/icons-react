import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwow_w44a.css';
import '../../css/l/lsq66r8ar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwow_w44a"/><path class="lsq66r8ar"/>`,
		"fallback": "solar:chevron-last-bold-duotone",
	});
}

export default Component;
