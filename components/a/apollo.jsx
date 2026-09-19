import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulra56alq.css';
import '../../css/x/xrqhfhb1a.css';
import '../../css/a/axioowbpp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ulra56alq"><path class="xrqhfhb1a"/><path class="axioowbpp"/></g>`,
		"fallback": "catppuccin:apollo",
	});
}

export default Component;
