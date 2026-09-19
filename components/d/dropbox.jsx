import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/ccc6s1dcd.css';
import '../../css/f/fr5macbyd.css';
import '../../css/s/sl_g-c3zu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ccc6s1dcd"/><path class="fr5macbyd"/><path class="sl_g-c3zu"/></g>`,
		"fallback": "icon-park-outline:dropbox",
	});
}

export default Component;
