import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/h6g-debnk.css';
import '../../css/x/xo4gwub4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="h6g-debnk"/><path class="xo4gwub4e"/></g>`,
		"fallback": "matita:folder-open",
	});
}

export default Component;
