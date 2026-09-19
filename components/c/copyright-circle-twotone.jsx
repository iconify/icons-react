import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/s/sb41w-beq.css';
import '../../css/x/xt06buell.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="sb41w-beq"/><path class="xt06buell"/>`,
		"fallback": "ant-design:copyright-circle-twotone",
	});
}

export default Component;
