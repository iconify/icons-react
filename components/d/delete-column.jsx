import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj-zn2xho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj-zn2xho"/>`,
		"fallback": "ci:delete-column",
	});
}

export default Component;
