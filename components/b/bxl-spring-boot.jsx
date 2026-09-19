import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwxvscclp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwxvscclp"/>`,
		"fallback": "bx:bxl-spring-boot",
	});
}

export default Component;
