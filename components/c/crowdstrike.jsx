import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucx28femh.css';
import '../../css/o/oyscm1bel.css';
import '../../css/p/phvsc-r-k.css';

const viewBox = {"width":173,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ucx28femh"><path class="oyscm1bel"/><path class="phvsc-r-k"/></g>`,
		"fallback": "thesvg-color:crowdstrike",
	});
}

export default Component;
