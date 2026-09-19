import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq32jab3w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq32jab3w"/>`,
		"fallback": "flat-color-icons:empty-filter",
	});
}

export default Component;
