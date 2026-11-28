import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aybc_5yie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aybc_5yie"/>`,
		"fallback": "noviair:frog",
	});
}

export default Component;
