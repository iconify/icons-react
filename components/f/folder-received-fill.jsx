import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irsc5qbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irsc5qbmu"/>`,
		"fallback": "ri:folder-received-fill",
	});
}

export default Component;
