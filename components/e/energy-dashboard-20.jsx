import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1vu9wbcv.css';
import '../../css/a/ab_3yebvn.css';
import '../../css/o/os-dp_ruu.css';
import '../../css/c/cg676jb6o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1vu9wbcv"/><path class="ab_3yebvn"/><path class="os-dp_ruu"/><path class="cg676jb6o"/>`,
		"fallback": "energy-icons:energy-dashboard-20",
	});
}

export default Component;
