import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/msr-g5qku.css';
import '../../css/w/wl6dztxwb.css';
import '../../css/u/uztwjz-8c.css';
import '../../css/v/v3xyz11jq.css';
import '../../css/w/wicugobki.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="msr-g5qku"/><path class="wl6dztxwb"/><path class="uztwjz-8c"/><path class="v3xyz11jq"/><path class="wicugobki"/></g>`,
		"fallback": "streamline-color:browser-block",
	});
}

export default Component;
