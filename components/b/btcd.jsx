import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydtohebyk.css';
import '../../css/n/ni0dvvb7f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ydtohebyk"/><path class="ni0dvvb7f"/></g>`,
		"fallback": "cryptocurrency-color:btcd",
	});
}

export default Component;
