import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqo98j5vl.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqo98j5vl"/>`,
		"fallback": "dinkie-icons:fire",
	});
}

export default Component;
