import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5eugu3ed.css';
import '../../css/v/vd_9zuben.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5eugu3ed"/><path class="vd_9zuben"/>`,
		"fallback": "vaadin:chevron-circle-left-o",
	});
}

export default Component;
