import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc8ninjpx.css';
import '../../css/e/epg14abwe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc8ninjpx"/><path class="epg14abwe"/>`,
		"fallback": "vaadin:comment-ellipsis-o",
	});
}

export default Component;
