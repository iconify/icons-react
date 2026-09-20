import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mije3dbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mije3dbds"/>`,
		"fallback": "mdi:account-hard-hat-outline",
	});
}

export default Component;
