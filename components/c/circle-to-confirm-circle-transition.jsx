import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/q/q9aucu.css';
import '../../css/c/czrd3c.css';
import '../../css/s/so-from-14.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c q9aucu"/><path class="a0m25c czrd3c"/>`,
		"fallback": "line-md:circle-to-confirm-circle-transition",
	});
}

export default Component;
