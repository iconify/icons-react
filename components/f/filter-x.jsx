import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyj2c0vnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyj2c0vnu"/>`,
		"fallback": "noviair:filter-x",
	});
}

export default Component;
