import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxq523bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxq523bui"/>`,
		"fallback": "mage:arrow-right-square-fill",
	});
}

export default Component;
