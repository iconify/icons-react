import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o28emeehs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o28emeehs"/>`,
		"fallback": "hugeicons:file-chart-column",
	});
}

export default Component;
