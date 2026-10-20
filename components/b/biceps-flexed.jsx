import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7l-kbcuo.css';
import '../../css/y/yxiw_ybus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g7l-kbcuo"/><path class="yxiw_ybus"/></g>`,
		"fallback": "vadivam:biceps-flexed",
	});
}

export default Component;
