import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee-sbeb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee-sbeb5e"/>`,
		"fallback": "noviair-light:first-aid",
	});
}

export default Component;
