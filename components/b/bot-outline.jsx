import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_fy29box.css';
import '../../css/q/qlvc8z3kf.css';
import '../../css/x/xcefx3l9e.css';
import '../../css/c/cf1g6vc0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_fy29box"/><path class="qlvc8z3kf"/><path class="xcefx3l9e"/><path clip-rule="evenodd" class="cf1g6vc0y"/>`,
		"fallback": "solar:bot-outline",
	});
}

export default Component;
