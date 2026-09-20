import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd07yqmly.css';
import '../../css/z/zlrwl1bnk.css';
import '../../css/l/lstaoj3fp.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd07yqmly"/><path class="zlrwl1bnk"/><path class="lstaoj3fp"/><path class="i7sr6ubzr"/>`,
		"fallback": "pixel:hockey-mask",
	});
}

export default Component;
