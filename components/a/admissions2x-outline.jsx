import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fkkckfbrz.css';
import '../../css/w/wsqwqiv3t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fkkckfbrz"/><path class="wsqwqiv3t"/></g>`,
		"fallback": "healthicons:admissions2x-outline",
	});
}

export default Component;
