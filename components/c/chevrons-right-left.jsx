import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxunf795o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxunf795o"/>`,
		"fallback": "lucide:chevrons-right-left",
	});
}

export default Component;
