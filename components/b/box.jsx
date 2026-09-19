import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhwmv1zcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="jhwmv1zcs"/>`,
		"fallback": "akar-icons:box",
	});
}

export default Component;
