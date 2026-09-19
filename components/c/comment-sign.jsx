import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7qvsivew.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7qvsivew"/>`,
		"fallback": "zmdi:comment-sign",
	});
}

export default Component;
