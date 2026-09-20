import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iflla3gmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iflla3gmr"/>`,
		"fallback": "keyline-icons:face-frown-fill",
	});
}

export default Component;
