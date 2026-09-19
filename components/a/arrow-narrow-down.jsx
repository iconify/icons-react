import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrsv_rb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrsv_rb4j"/>`,
		"fallback": "heroicons-outline:arrow-narrow-down",
	});
}

export default Component;
