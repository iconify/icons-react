import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6qv5xbnv.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6qv5xbnv"/>`,
		"fallback": "ps:barrel",
	});
}

export default Component;
