import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br4kg7krz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br4kg7krz"/>`,
		"fallback": "la:car-solid",
	});
}

export default Component;
