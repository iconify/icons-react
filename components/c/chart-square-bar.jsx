import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9kgmhb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9kgmhb1l"/>`,
		"fallback": "heroicons-outline:chart-square-bar",
	});
}

export default Component;
