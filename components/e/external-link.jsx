import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i44s8reft.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i44s8reft"/>`,
		"fallback": "fa7-solid:external-link",
	});
}

export default Component;
