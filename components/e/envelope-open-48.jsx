import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6va0ihvr.css';
import '../../css/y/y_9con1lw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6va0ihvr"/><path class="y_9con1lw"/>`,
		"fallback": "energy-icons:envelope-open-48",
	});
}

export default Component;
