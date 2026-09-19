import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/veml0mbwe.css';
import '../../css/j/j8f4t4bxc.css';
import '../../css/j/jgx7b9k1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="veml0mbwe"/><path class="j8f4t4bxc"/><path class="jgx7b9k1w"/></g>`,
		"fallback": "hugeicons:insert-column-left",
	});
}

export default Component;
