import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/md4di2vlv.css';
import '../../css/h/hraeq983i.css';
import '../../css/u/uvb-1pbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="md4di2vlv"/><path class="hraeq983i"/><path class="uvb-1pbtc"/></g>`,
		"fallback": "iconaut:golf",
	});
}

export default Component;
