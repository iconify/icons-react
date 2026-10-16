import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i50lbdzkp.css';
import '../../css/k/kulakgbcg.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i50lbdzkp"/><path class="kulakgbcg"/><path class="hwjgqrbah"/><path class="ygtv74bcc"/>`,
		"fallback": "energy-icons:electrolyser-alert-48-bold",
	});
}

export default Component;
