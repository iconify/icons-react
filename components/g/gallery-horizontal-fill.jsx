import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr29-dgdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr29-dgdb"/>`,
		"fallback": "mingcute:gallery-horizontal-fill",
	});
}

export default Component;
