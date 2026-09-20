import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/v/v5yammbrs.css';
import '../../css/c/cl21r6-zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="v5yammbrs"/><path class="cl21r6-zy"/></g>`,
		"fallback": "tdesign:import",
	});
}

export default Component;
