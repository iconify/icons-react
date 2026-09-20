import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v8j8qk1uu.css';
import '../../css/y/yvu96wbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v8j8qk1uu"/><path class="yvu96wbou"/></g>`,
		"fallback": "vadivam:database",
	});
}

export default Component;
