import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrju-_2fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yrju-_2fg"/>`,
		"fallback": "keyline-icons:crown-sharp-fill",
	});
}

export default Component;
