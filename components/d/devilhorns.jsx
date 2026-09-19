import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0-20imgh.css';
import '../../css/k/kqs-8dbyr.css';
import '../../css/k/kz7mlmbof.css';
import '../../css/l/lau2l9j4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0-20imgh"/><path class="kqs-8dbyr"/><path class="kz7mlmbof"/><path class="lau2l9j4m"/>`,
		"fallback": "fxemoji:devilhorns",
	});
}

export default Component;
