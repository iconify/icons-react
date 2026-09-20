import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfz-8ubyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfz-8ubyb"/>`,
		"fallback": "mdi:cloud-tick",
	});
}

export default Component;
