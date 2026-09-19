import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/ryp-z5bxc.css';
import '../../css/w/wjq_f-bnz.css';
import '../../css/t/t8dyhxr9l.css';
import '../../css/l/ls8xdfges.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ryp-z5bxc"/><path class="wjq_f-bnz"/><path class="t8dyhxr9l"/><path class="ls8xdfges"/></g>`,
		"fallback": "iconamoon:file-image",
	});
}

export default Component;
