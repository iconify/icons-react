import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoz8nebcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hoz8nebcp"/>`,
		"fallback": "akar-icons:circle-chevron-left-fill",
	});
}

export default Component;
