import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6q3dwxxu.css';
import '../../css/x/xtwgksb_s.css';
import '../../css/r/rp7oy-b8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6q3dwxxu"/><path class="xtwgksb_s"/><path class="rp7oy-b8j"/>`,
		"fallback": "selfhst:finn",
	});
}

export default Component;
