import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzq4i7b8a.css';
import '../../css/v/vlrw4gbqi.css';
import '../../css/d/dj4zkv6cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bzq4i7b8a"/><path class="vlrw4gbqi"/><path class="dj4zkv6cn"/></g>`,
		"fallback": "andrsrxn:air-conditioner-snow",
	});
}

export default Component;
