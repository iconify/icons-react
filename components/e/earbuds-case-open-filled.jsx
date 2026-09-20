import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h3-vng7su.css';
import '../../css/a/a_vghkb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h3-vng7su"/><path class="a_vghkb7i"/></g>`,
		"fallback": "reicon:earbuds-case-open-filled",
	});
}

export default Component;
