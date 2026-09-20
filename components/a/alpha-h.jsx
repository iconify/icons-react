import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvm82htil.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvm82htil"/>`,
		"fallback": "memory:alpha-h",
	});
}

export default Component;
