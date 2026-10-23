import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yhy_b6idc.css';
import '../../css/t/t79m41w7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yhy_b6idc"/><path class="t79m41w7m"/></g>`,
		"fallback": "vadivam:folder-check",
	});
}

export default Component;
