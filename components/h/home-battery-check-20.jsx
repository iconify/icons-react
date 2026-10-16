import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxr384btv.css';
import '../../css/m/mf8_0-bsn.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxr384btv"/><path class="mf8_0-bsn"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:home-battery-check-20",
	});
}

export default Component;
