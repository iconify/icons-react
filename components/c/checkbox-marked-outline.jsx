import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejca9ogzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejca9ogzr"/>`,
		"fallback": "mdi:checkbox-marked-outline",
	});
}

export default Component;
