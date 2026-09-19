import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unsn_va9s.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unsn_va9s"/>`,
		"fallback": "zmdi:comment-video",
	});
}

export default Component;
