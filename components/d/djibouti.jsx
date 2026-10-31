import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6fla5ihq.css';
import '../../css/w/wc3ev5p3f.css';
import '../../css/k/k6f9ajnvk.css';
import '../../css/f/fy2k2g21h.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6fla5ihq"/><path class="wc3ev5p3f"/><path class="k6f9ajnvk"/><path class="fy2k2g21h"/>`,
		"fallback": "tabler-flags:djibouti",
	});
}

export default Component;
