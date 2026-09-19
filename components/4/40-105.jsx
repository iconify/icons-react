import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kniyv1net.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kniyv1net"/>`,
		"fallback": "ps:40-105",
	});
}

export default Component;
