import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e9xd2ib6x.css';
import '../../css/k/ko-p4z89g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e9xd2ib6x"/><path class="ko-p4z89g"/></g>`,
		"fallback": "streamline-flex-color:health-care-2-flat",
	});
}

export default Component;
