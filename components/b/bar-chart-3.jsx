import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtkbmnbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtkbmnbdq"/>`,
		"fallback": "lucide:bar-chart-3",
	});
}

export default Component;
