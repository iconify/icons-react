import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hf_-_gbgn.css';
import '../../css/e/e4iu9bc8j.css';
import '../../css/s/slsuh_zzt.css';
import '../../css/f/f56d9ccde.css';
import '../../css/y/ysu0dnbfq.css';
import '../../css/z/zyme4hbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hf_-_gbgn"/><path class="e4iu9bc8j"/><path class="slsuh_zzt"/><path class="f56d9ccde"/><path class="ysu0dnbfq"/><path class="zyme4hbkr"/></g>`,
		"fallback": "solar:brain-line-duotone",
	});
}

export default Component;
