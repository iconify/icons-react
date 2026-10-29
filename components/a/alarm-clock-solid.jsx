import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/axj7hdb4p.css';
import '../../css/b/bwvqb54kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="axj7hdb4p"/><path class="bwvqb54kv wm-a"/></g>`,
		"fallback": "withicons:alarm-clock-solid",
	});
}

export default Component;
