import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ypnuk21eq.css';
import '../../css/a/azbh1qjam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ypnuk21eq"/><path class="azbh1qjam"/></g>`,
		"fallback": "andrsrxn:align-box-top-center",
	});
}

export default Component;
