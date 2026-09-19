import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw25tvi6u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw25tvi6u"/>`,
		"fallback": "bi:cloud-snow-fill",
	});
}

export default Component;
