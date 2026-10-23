import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oj81mjbax.css';
import '../../css/d/dcukmxbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oj81mjbax"/><path class="dcukmxbjy"/></g>`,
		"fallback": "vadivam:calendar-1",
	});
}

export default Component;
