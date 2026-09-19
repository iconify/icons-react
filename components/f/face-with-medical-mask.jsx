import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w254xvbma.css';
import '../../css/x/xdp90xgqj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w254xvbma"/><path clip-rule="evenodd" class="xdp90xgqj"/>`,
		"fallback": "fluent-emoji-high-contrast:face-with-medical-mask",
	});
}

export default Component;
