import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsqoa169k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hsqoa169k"/>`,
		"fallback": "healthicons:eye-outline-24px",
	});
}

export default Component;
