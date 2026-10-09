import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5ebr9bjc.css';
import '../../css/n/ng0ti4b2j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5ebr9bjc"/><path class="ng0ti4b2j"/>`,
		"fallback": "energy-icons:charger-fast-48",
	});
}

export default Component;
