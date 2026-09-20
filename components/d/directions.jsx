import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6oy1q_yr.css';
import '../../css/c/c14mgt73k.css';
import '../../css/x/xq8wemwrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6oy1q_yr"/><path class="c14mgt73k"/><path class="xq8wemwrk"/>`,
		"fallback": "prime:directions",
	});
}

export default Component;
