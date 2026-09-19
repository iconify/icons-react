import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fsgtypbca.css';
import '../../css/w/wx1nv1b4t.css';
import '../../css/b/ba9iqk-jv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="fsgtypbca"/><path class="wx1nv1b4t"/><path class="ba9iqk-jv"/></g>`,
		"fallback": "icon-park-outline:bank-card-two",
	});
}

export default Component;
