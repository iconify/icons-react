import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxa8gzb9h.css';
import '../../css/z/z6doifb7c.css';
import '../../css/s/sqb-0hb_q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxa8gzb9h"/><path class="z6doifb7c"/><path class="sqb-0hb_q"/>`,
		"fallback": "flat-color-icons:dam",
	});
}

export default Component;
