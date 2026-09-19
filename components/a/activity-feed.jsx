import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0gy64b3g.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0gy64b3g"/>`,
		"fallback": "fluent-mdl2:activity-feed",
	});
}

export default Component;
