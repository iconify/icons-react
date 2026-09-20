import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4xnej07m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4xnej07m"/>`,
		"fallback": "mdi:allergy-outline",
	});
}

export default Component;
