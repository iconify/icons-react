import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eddavmbuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eddavmbuh"/>`,
		"fallback": "ri:arrow-drop-down-fill",
	});
}

export default Component;
