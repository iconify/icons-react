import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv311ubob.css';
import '../../css/k/ka291wulv.css';
import '../../css/l/luyuy--wm.css';
import '../../css/r/r7ookxbjl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv311ubob"/><path class="ka291wulv"/><path class="luyuy--wm"/><path class="r7ookxbjl"/>`,
		"fallback": "selfhst:dbackup-dark",
	});
}

export default Component;
