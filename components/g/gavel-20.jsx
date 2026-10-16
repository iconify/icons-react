import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltt_btmrh.css';
import '../../css/z/zjsm6-byf.css';
import '../../css/b/bxl44g1ui.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltt_btmrh"/><path class="zjsm6-byf"/><path class="bxl44g1ui"/>`,
		"fallback": "energy-icons:gavel-20",
	});
}

export default Component;
