import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_dovporp.css';
import '../../css/r/rc7tgcbfi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_dovporp"/><path class="rc7tgcbfi"/>`,
		"fallback": "selfhst:airpipe",
	});
}

export default Component;
