import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miej-3nwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miej-3nwn"/>`,
		"fallback": "mage:arrow-down-right-square-fill",
	});
}

export default Component;
