import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbxakcdnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbxakcdnp"/>`,
		"fallback": "mdi:house-remove-outline",
	});
}

export default Component;
