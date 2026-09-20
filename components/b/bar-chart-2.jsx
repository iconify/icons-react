import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4wt8hb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4wt8hb_q"/>`,
		"fallback": "lucide:bar-chart-2",
	});
}

export default Component;
