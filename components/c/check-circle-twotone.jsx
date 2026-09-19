import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/k/kk_0dtxfg.css';
import '../../css/j/jfk2sab_g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="kk_0dtxfg"/><path class="jfk2sab_g"/>`,
		"fallback": "ant-design:check-circle-twotone",
	});
}

export default Component;
