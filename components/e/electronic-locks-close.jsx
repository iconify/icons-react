import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gkr7b7b8o.css';
import '../../css/e/e7dr5zbeu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="gkr7b7b8o"/><path class="e7dr5zbeu"/></g>`,
		"fallback": "icon-park-outline:electronic-locks-close",
	});
}

export default Component;
