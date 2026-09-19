import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/ftpkt8zyt.css';
import '../../css/f/f2sltbbdx.css';
import '../../css/r/ru9wejb0k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ftpkt8zyt"/><circle class="f2sltbbdx"/><path class="ru9wejb0k"/></g>`,
		"fallback": "icon-park-outline:file-date-one",
	});
}

export default Component;
