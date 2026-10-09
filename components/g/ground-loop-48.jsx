import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4gy22yti.css';
import '../../css/i/ifweg2bug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4gy22yti"/><path class="ifweg2bug"/>`,
		"fallback": "energy-icons:ground-loop-48",
	});
}

export default Component;
