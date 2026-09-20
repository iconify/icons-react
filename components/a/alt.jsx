import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb_g5bbta.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb_g5bbta"/>`,
		"fallback": "quill:alt",
	});
}

export default Component;
