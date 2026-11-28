import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w15vl9bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w15vl9bgv"/>`,
		"fallback": "noviair-light:garage",
	});
}

export default Component;
