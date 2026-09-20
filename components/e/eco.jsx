import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu-3omdxe.css';
import '../../css/q/qjqgoubck.css';
import '../../css/b/bp_58fjhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu-3omdxe"/><path class="qjqgoubck"/><path class="bp_58fjhm"/>`,
		"fallback": "token:eco",
	});
}

export default Component;
