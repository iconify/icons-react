import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohmo-m-xn.css';
import '../../css/x/x1a4xfbxb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ohmo-m-xn"/><path class="x1a4xfbxb"/></g>`,
		"fallback": "cryptocurrency-color:bnb",
	});
}

export default Component;
