import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inujsab6w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inujsab6w"/>`,
		"fallback": "roentgen:advertising-column",
	});
}

export default Component;
