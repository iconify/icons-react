import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdhad0ihx.css';
import '../../css/b/bjhb_puya.css';
import '../../css/w/w4m-jwb9x.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdhad0ihx"/><path class="bjhb_puya"/><path class="w4m-jwb9x"/>`,
		"fallback": "tabler-flags:guinea",
	});
}

export default Component;
