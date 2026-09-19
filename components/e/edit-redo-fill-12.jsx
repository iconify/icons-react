import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umnnux3_u.css';
import '../../css/m/mgoapachr.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umnnux3_u"/><path class="mgoapachr"/>`,
		"fallback": "garden:edit-redo-fill-12",
	});
}

export default Component;
