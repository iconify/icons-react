import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgbzj_rvw.css';
import '../../css/y/y862trbtu.css';
import '../../css/e/e11mdeprk.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgbzj_rvw"/><path class="y862trbtu"/><path class="e11mdeprk"/>`,
		"fallback": "tabler-flags:cefta",
	});
}

export default Component;
