import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wrkd8ms6w.css';
import '../../css/g/g68e1q3zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wrkd8ms6w"/><path class="g68e1q3zh"/></g>`,
		"fallback": "vadivam:flower-2",
	});
}

export default Component;
