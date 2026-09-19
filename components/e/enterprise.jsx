import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q23s4ccja.css';
import '../../css/m/mn4wyk1sv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q23s4ccja"/><path class="mn4wyk1sv"/>`,
		"fallback": "carbon:enterprise",
	});
}

export default Component;
