import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihfx8m51v.css';
import '../../css/w/wm1h11yoe.css';
import '../../css/n/nnrx8kbgf.css';
import '../../css/s/sv9kyvbqr.css';
import '../../css/t/tpupr4s0v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihfx8m51v"/><path class="wm1h11yoe"/><path class="nnrx8kbgf"/><path class="sv9kyvbqr"/><path class="tpupr4s0v"/>`,
		"fallback": "carbon:3d-cursor-alt",
	});
}

export default Component;
