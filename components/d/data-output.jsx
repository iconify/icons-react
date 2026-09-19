import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmierzc3a.css';
import '../../css/t/t3qjwd-yy.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmierzc3a"/><path class="t3qjwd-yy"/>`,
		"fallback": "bpmn:data-output",
	});
}

export default Component;
