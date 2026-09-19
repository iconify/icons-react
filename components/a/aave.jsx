import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhxa4rbjm.css';
import '../../css/x/x51z-ybzo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lhxa4rbjm"/><path class="x51z-ybzo"/></g>`,
		"fallback": "cryptocurrency-color:aave",
	});
}

export default Component;
