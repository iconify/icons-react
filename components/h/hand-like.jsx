import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtge1ybso.css';
import '../../css/u/ujy_e8uzq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtge1ybso"/><path class="ujy_e8uzq"/>`,
		"fallback": "streamline-pixel:hand-like",
	});
}

export default Component;
