import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eck_ywbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eck_ywbvl"/>`,
		"fallback": "ri:arrow-drop-right-fill",
	});
}

export default Component;
