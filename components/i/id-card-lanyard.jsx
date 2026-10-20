import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o__r8c3tm.css';
import '../../css/a/avjkn5b5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o__r8c3tm"/><path class="avjkn5b5y"/></g>`,
		"fallback": "vadivam:id-card-lanyard",
	});
}

export default Component;
