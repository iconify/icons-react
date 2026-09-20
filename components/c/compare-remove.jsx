import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7-dn10az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7-dn10az"/>`,
		"fallback": "mdi:compare-remove",
	});
}

export default Component;
