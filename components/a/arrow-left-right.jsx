import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gl__2bekl.css';
import '../../css/y/y181spbjf.css';
import '../../css/b/bk5_yhbfg.css';
import '../../css/u/umqx8xbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gl__2bekl wm-shadow"/><path class="wm-shadow y181spbjf"/><path class="bk5_yhbfg"/><path class="umqx8xbnz"/></g>`,
		"fallback": "withicons-brutal:arrow-left-right",
	});
}

export default Component;
