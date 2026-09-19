import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xsla1x1af.css';
import '../../css/h/hwr9vebsp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="xsla1x1af"/><path class="hwr9vebsp"/></g>`,
		"fallback": "cryptocurrency-color:colx",
	});
}

export default Component;
