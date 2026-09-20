import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jco9mbcel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jco9mbcel"/>`,
		"fallback": "streamline-cyber:credit-card-edit",
	});
}

export default Component;
