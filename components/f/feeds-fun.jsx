import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmmy86dde.css';
import '../../css/s/sva9mubnr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmmy86dde"/><path class="sva9mubnr"/>`,
		"fallback": "selfhst:feeds-fun",
	});
}

export default Component;
