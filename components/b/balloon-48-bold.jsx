import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed93ssb8t.css';
import '../../css/u/u-r_1idsq.css';
import '../../css/f/fcjo0ib-l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed93ssb8t"/><path class="u-r_1idsq"/><path class="fcjo0ib-l"/>`,
		"fallback": "energy-icons:balloon-48-bold",
	});
}

export default Component;
