import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo2057bxh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo2057bxh"/>`,
		"fallback": "selfhst:alarmpi-dark",
	});
}

export default Component;
