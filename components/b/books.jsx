import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5hs5qbej.css';
import '../../css/x/xl_i265-u.css';
import '../../css/d/d42sx8bgr.css';

const viewBox = {"width":18,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5hs5qbej"/><path class="xl_i265-u"/><path class="d42sx8bgr"/>`,
		"fallback": "icomoon-free:books",
	});
}

export default Component;
