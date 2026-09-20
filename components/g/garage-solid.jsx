import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk-jb4_bv.css';
import '../../css/y/yg49weaem.css';
import '../../css/k/kyq-juboh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk-jb4_bv"/><path clip-rule="evenodd" class="yg49weaem"/><path class="kyq-juboh"/>`,
		"fallback": "teenyicons:garage-solid",
	});
}

export default Component;
