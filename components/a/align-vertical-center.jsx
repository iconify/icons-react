import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qafr6ubam.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qafr6ubam"/>`,
		"fallback": "memory:align-vertical-center",
	});
}

export default Component;
