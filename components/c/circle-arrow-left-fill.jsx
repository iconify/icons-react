import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzri7tbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzri7tbxl"/>`,
		"fallback": "keyline-icons:circle-arrow-left-fill",
	});
}

export default Component;
