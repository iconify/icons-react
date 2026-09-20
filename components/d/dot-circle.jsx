import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz4vio0-y.css';
import '../../css/v/vd_9zuben.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz4vio0-y"/><path class="vd_9zuben"/>`,
		"fallback": "vaadin:dot-circle",
	});
}

export default Component;
