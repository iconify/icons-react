import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9l2qqe6j.css';
import '../../css/c/cy1drpb6o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9l2qqe6j"/><path class="cy1drpb6o"/>`,
		"fallback": "energy-icons:chart-bar-grouped-48",
	});
}

export default Component;
