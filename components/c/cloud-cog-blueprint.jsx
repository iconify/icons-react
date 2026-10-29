import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z8l28cbll.css';
import '../../css/z/zu-tg1-8v.css';
import '../../css/j/jxypp_bkd.css';
import '../../css/t/tm19bt68n.css';
import '../../css/x/xuhta9yqz.css';
import '../../css/g/g6_477byu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco z8l28cbll"/><path class="wm-deco zu-tg1-8v"/><path class="jxypp_bkd wm-deco"/><path class="tm19bt68n wm-k"/><path class="wm-s xuhta9yqz"/><path class="g6_477byu wm-k"/></g>`,
		"fallback": "withicons:cloud-cog-blueprint",
	});
}

export default Component;
