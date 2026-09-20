import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajp31hbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajp31hbsu"/>`,
		"fallback": "mdi:human-male-height-variant",
	});
}

export default Component;
