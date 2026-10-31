import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xbzieqlfa.css';
import '../../css/z/zqzkvhb0y.css';
import '../../css/x/xgqg6zbls.css';
import '../../css/i/irssdgb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xbzieqlfa"/><path class="zqzkvhb0y"/><path class="xgqg6zbls"/><path class="irssdgb_o"/></g>`,
		"fallback": "withicons-retro:air-vent",
	});
}

export default Component;
