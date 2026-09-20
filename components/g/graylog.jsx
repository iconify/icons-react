import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7dcb4o8w.css';
import '../../css/x/x6gvil5vf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7dcb4o8w"/><path class="x6gvil5vf"/>`,
		"fallback": "selfhst:graylog",
	});
}

export default Component;
