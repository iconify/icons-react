import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-3snbgkx.css';
import '../../css/x/xkm8tp3yb.css';
import '../../css/z/zo9d9ebbp.css';
import '../../css/j/j-b9rmbgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h-3snbgkx"/><path class="xkm8tp3yb"/><path class="zo9d9ebbp"/><path class="j-b9rmbgq"/></g>`,
		"fallback": "streamline-cyber-color:businessman-speech",
	});
}

export default Component;
