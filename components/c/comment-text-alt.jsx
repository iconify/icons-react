import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7ktuhjxu.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7ktuhjxu"/>`,
		"fallback": "zmdi:comment-text-alt",
	});
}

export default Component;
