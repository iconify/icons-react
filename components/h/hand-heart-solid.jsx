import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r4es2h2kv.css';
import '../../css/w/w3grf8bog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r4es2h2kv"/><path class="w3grf8bog wm-a"/></g>`,
		"fallback": "withicons:hand-heart-solid",
	});
}

export default Component;
