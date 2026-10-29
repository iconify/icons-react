import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xv0v_kb0v.css';
import '../../css/a/ao3q6mbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xv0v_kb0v"/><path class="ao3q6mbyp wm-a"/></g>`,
		"fallback": "withicons:bath-solid",
	});
}

export default Component;
