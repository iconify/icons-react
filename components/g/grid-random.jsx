import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ckw8ferwi.css';
import '../../css/f/fa7kf29xn.css';
import '../../css/b/b59zqpbyl.css';
import '../../css/y/yzpwcoblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-180 21.51 10.34)" class="ckw8ferwi"/><rect transform="rotate(-180 10.24 13.25)" class="fa7kf29xn"/><rect transform="rotate(-180 19.2 21.45)" class="b59zqpbyl"/><rect transform="matrix(1 0 0 -1 13.76 10.34)" class="yzpwcoblr"/><rect transform="matrix(1 0 0 -1 2.49 13.25)" class="yzpwcoblr"/><rect transform="matrix(1 0 0 -1 11.45 21.45)" class="yzpwcoblr"/></g>`,
		"fallback": "andrsrxn:grid-random",
	});
}

export default Component;
