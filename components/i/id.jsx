import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k83jpvbjp.css';
import '../../css/x/x5rt7xbfv.css';
import '../../css/p/p9j8izb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k83jpvbjp"/><path class="x5rt7xbfv"/><path class="p9j8izb5f"/></g>`,
		"fallback": "hugeicons:id",
	});
}

export default Component;
