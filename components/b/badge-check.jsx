import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3h1xlegu.css';
import '../../css/w/wec5r5x0c.css';
import '../../css/c/cee6ktbiu.css';
import '../../css/m/moj8iuyvm.css';
import '../../css/l/leyatlwui.css';
import '../../css/t/tna3nf43i.css';
import '../../css/k/k115mnbwm.css';
import '../../css/e/eulzo9b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3h1xlegu wm-shadow"/><path class="wec5r5x0c wm-k"/><path class="cee6ktbiu wm-k"/><path class="moj8iuyvm wm-k"/><path class="leyatlwui wm-k"/><path class="tna3nf43i wm-shine"/><path class="k115mnbwm wm-k"/><path class="eulzo9b5q wm-a"/>`,
		"fallback": "withicons-plush:badge-check",
	});
}

export default Component;
