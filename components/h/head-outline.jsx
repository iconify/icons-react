import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hszka1bdf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hszka1bdf"/>`,
		"fallback": "healthicons:head-outline",
	});
}

export default Component;
