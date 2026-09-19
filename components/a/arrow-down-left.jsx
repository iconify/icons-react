import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnf5dgrat.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnf5dgrat"/>`,
		"fallback": "icomoon-free:arrow-down-left",
	});
}

export default Component;
