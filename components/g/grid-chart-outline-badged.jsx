import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfhqbtb_c.css';
import '../../css/y/y57fkfjew.css';
import '../../css/u/uos4js72w.css';
import '../../css/q/qzqgo1b-a.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged lfhqbtb_c"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged y57fkfjew"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged uos4js72w"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged qzqgo1b-a"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-5--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:grid-chart-outline-badged",
	});
}

export default Component;
