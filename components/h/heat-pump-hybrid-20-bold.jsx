import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2qly6b8v.css';
import '../../css/y/yxx6x7qnn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2qly6b8v"/><path class="yxx6x7qnn"/>`,
		"fallback": "energy-icons:heat-pump-hybrid-20-bold",
	});
}

export default Component;
