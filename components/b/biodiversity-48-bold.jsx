import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un1r_mbsq.css';
import '../../css/x/xffa8bcjg.css';
import '../../css/p/pu1_4vbar.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un1r_mbsq"/><path class="xffa8bcjg"/><path class="pu1_4vbar"/>`,
		"fallback": "energy-icons:biodiversity-48-bold",
	});
}

export default Component;
