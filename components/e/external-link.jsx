import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tosy_bjbu.css';
import '../../css/n/n9hmz6bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tosy_bjbu"/><path class="n9hmz6bla"/></g>`,
		"fallback": "andrsrxn:external-link",
	});
}

export default Component;
