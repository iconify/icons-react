import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axcrtbcwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axcrtbcwi"/>`,
		"fallback": "noviair-light:backpack-check",
	});
}

export default Component;
