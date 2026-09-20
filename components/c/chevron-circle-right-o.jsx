import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu1zrnu_l.css';
import '../../css/v/vd_9zuben.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu1zrnu_l"/><path class="vd_9zuben"/>`,
		"fallback": "vaadin:chevron-circle-right-o",
	});
}

export default Component;
