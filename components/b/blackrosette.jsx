import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx8flbcue.css';
import '../../css/b/bcxczsbsq.css';
import '../../css/v/vt_upswac.css';
import '../../css/u/uacfgoblp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx8flbcue"/><path class="bcxczsbsq"/><circle class="vt_upswac"/><circle class="uacfgoblp"/>`,
		"fallback": "fxemoji:blackrosette",
	});
}

export default Component;
