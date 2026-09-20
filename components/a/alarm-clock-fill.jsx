import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr_xah05r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr_xah05r"/>`,
		"fallback": "mage:alarm-clock-fill",
	});
}

export default Component;
