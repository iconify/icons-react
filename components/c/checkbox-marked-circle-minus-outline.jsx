import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/divcj272b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="divcj272b"/>`,
		"fallback": "mdi:checkbox-marked-circle-minus-outline",
	});
}

export default Component;
