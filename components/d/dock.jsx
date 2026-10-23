import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxuuc5wmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxuuc5wmy"/>`,
		"fallback": "vadivam:dock",
	});
}

export default Component;
