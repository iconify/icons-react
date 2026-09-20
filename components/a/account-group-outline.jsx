import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfli58bkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfli58bkg"/>`,
		"fallback": "mdi:account-group-outline",
	});
}

export default Component;
