import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m05cz3c-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m05cz3c-m"/>`,
		"fallback": "noviair-light:clipboard-medical-plus",
	});
}

export default Component;
