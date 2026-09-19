import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/g/gz2qe6b_o.css';
import '../../css/g/g_mohvbwm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="gz2qe6b_o"/><path class="g_mohvbwm"/>`,
		"fallback": "ant-design:close-circle-twotone",
	});
}

export default Component;
