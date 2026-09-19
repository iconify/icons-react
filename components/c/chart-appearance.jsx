import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apqxuwf4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apqxuwf4j"/>`,
		"fallback": "griddy-icons:chart-appearance",
	});
}

export default Component;
