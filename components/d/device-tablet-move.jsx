import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3ac9d9jn.css';
import '../../css/w/wesutfjtn.css';
import '../../css/x/xtyg9db9j.css';
import '../../css/a/a2yq5ccvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m3ac9d9jn"/><path class="wesutfjtn"/><path class="xtyg9db9j"/><path class="a2yq5ccvy"/></g>`,
		"fallback": "andrsrxn:device-tablet-move",
	});
}

export default Component;
