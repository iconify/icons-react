import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kozerz84l.css';
import '../../css/x/xzpsmbcgo.css';
import '../../css/x/xtyg9db9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kozerz84l"/><path class="xzpsmbcgo"/><path class="xtyg9db9j"/></g>`,
		"fallback": "andrsrxn:device-tablet-out",
	});
}

export default Component;
