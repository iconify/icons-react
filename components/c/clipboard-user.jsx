import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohe_6i2-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohe_6i2-q"/>`,
		"fallback": "mdi:clipboard-user",
	});
}

export default Component;
