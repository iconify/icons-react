import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3-4pu7qp.css';
import '../../css/m/mkmxqcb8u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3-4pu7qp"/><path class="mkmxqcb8u"/>`,
		"fallback": "selfhst:curator-bookmarks",
	});
}

export default Component;
