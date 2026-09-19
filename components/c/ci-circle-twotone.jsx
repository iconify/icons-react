import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/s/sl45xjp0u.css';
import '../../css/p/pvujd7blc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="sl45xjp0u"/><path class="pvujd7blc"/>`,
		"fallback": "ant-design:ci-circle-twotone",
	});
}

export default Component;
