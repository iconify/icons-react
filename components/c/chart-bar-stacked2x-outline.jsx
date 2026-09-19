import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/staa6lb3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="staa6lb3y"/>`,
		"fallback": "healthicons:chart-bar-stacked2x-outline",
	});
}

export default Component;
