import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck_742b9p.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck_742b9p"/>`,
		"fallback": "bpmn:ad-hoc-marker",
	});
}

export default Component;
