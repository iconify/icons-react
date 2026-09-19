import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4v9by9zz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4v9by9zz"/>`,
		"fallback": "healthicons:chart-line-stacked2x-outline",
	});
}

export default Component;
