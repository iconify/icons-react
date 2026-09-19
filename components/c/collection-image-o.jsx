import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe3j6tb3n.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe3j6tb3n"/>`,
		"fallback": "zmdi:collection-image-o",
	});
}

export default Component;
