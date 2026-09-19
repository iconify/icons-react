import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_qitj33o.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_qitj33o"/>`,
		"fallback": "whh:house",
	});
}

export default Component;
