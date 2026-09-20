import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azd3_ibmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azd3_ibmn"/>`,
		"fallback": "mdi:arrow-u-right-top",
	});
}

export default Component;
