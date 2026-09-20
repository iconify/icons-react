import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azj6c3b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azj6c3b5x"/>`,
		"fallback": "thesvg:almalinux",
	});
}

export default Component;
