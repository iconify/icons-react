import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2vpa7-wx.css';
import '../../css/q/q_r9obkld.css';
import '../../css/f/fnfrkrn2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2vpa7-wx"/><circle class="q_r9obkld"/><path class="fnfrkrn2b"/>`,
		"fallback": "famicons:camera-outline",
	});
}

export default Component;
