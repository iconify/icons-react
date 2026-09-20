import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h07tfzb-c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h07tfzb-c"/>`,
		"fallback": "streamline:bluetooth-disabled",
	});
}

export default Component;
