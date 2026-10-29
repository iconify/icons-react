import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xizme1w-r.css';
import '../../css/u/uqux2q4zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xizme1w-r"/><path class="uqux2q4zk wm-a"/></g>`,
		"fallback": "withicons:axe-solid",
	});
}

export default Component;
