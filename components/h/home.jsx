import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c39_9dbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c39_9dbfh"/>`,
		"fallback": "heroicons-outline:home",
	});
}

export default Component;
