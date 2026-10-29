import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a3h4-91du.css';
import '../../css/w/ww7t-sb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a3h4-91du"/><path class="wm-a ww7t-sb3g"/></g>`,
		"fallback": "withicons:files-solid",
	});
}

export default Component;
