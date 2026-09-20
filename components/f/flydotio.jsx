import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i10t6p7pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i10t6p7pl"/>`,
		"fallback": "simple-icons:flydotio",
	});
}

export default Component;
