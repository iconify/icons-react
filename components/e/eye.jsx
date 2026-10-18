import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eza7not1y.css';
import '../../css/j/jkon69jfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eza7not1y"/><path class="jkon69jfq"/></g>`,
		"fallback": "vadivam:eye",
	});
}

export default Component;
