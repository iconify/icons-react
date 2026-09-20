import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsnaprmvy.css';
import '../../css/k/kqrt5ob_v.css';
import '../../css/s/s6m-bfbsb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsnaprmvy"/><path class="kqrt5ob_v"/><path class="s6m-bfbsb"/>`,
		"fallback": "streamline-pixel:hand-writing",
	});
}

export default Component;
