import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig42f6box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig42f6box"/>`,
		"fallback": "heroicons-outline:exclamation-circle",
	});
}

export default Component;
