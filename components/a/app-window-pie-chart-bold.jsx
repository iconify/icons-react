import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6wc1bw2i.css';
import '../../css/h/h--yie27w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6wc1bw2i"/><path class="h--yie27w"/>`,
		"fallback": "streamline-ultimate:app-window-pie-chart-bold",
	});
}

export default Component;
