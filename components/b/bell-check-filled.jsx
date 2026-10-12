import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_9t_z5eb.css';
import '../../css/k/k6i9o7bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_9t_z5eb"/><path class="k6i9o7bvr"/>`,
		"fallback": "lucide-extended:bell-check-filled",
	});
}

export default Component;
