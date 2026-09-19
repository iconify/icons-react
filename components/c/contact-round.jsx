import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e7ugy10kt.css';
import '../../css/g/gp72obe2t.css';
import '../../css/l/lcts5dtqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e7ugy10kt"/><path class="gp72obe2t"/><path class="lcts5dtqa"/></g>`,
		"fallback": "hugeicons:contact-round",
	});
}

export default Component;
