import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuoycycep.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuoycycep"/>`,
		"fallback": "carbon:ibm-consulting-advantage-assistant",
	});
}

export default Component;
