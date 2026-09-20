import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tpa723bkj.css';
import '../../css/a/au992uqwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tpa723bkj"/><path class="au992uqwc"/></g>`,
		"fallback": "streamline-freehand:human-resources-employee-crown-woman",
	});
}

export default Component;
