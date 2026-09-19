import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjdk0bbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tjdk0bbfp"/>`,
		"fallback": "iconamoon:briefcase-fill",
	});
}

export default Component;
