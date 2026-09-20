import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfz6qmbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfz6qmbid"/>`,
		"fallback": "mage:chart-up",
	});
}

export default Component;
