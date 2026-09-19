import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4ou_7b8n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4ou_7b8n"/>`,
		"fallback": "fa7-regular:calendar-days",
	});
}

export default Component;
