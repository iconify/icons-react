import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg5b6wann.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg5b6wann"/>`,
		"fallback": "healthicons:chart-line",
	});
}

export default Component;
