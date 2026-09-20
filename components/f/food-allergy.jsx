import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnk5g35xy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnk5g35xy"/>`,
		"fallback": "mdi:food-allergy",
	});
}

export default Component;
