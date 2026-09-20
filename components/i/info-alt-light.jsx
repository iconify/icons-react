import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/n27hwib_u.css';
import '../../css/d/dtnj1ib4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="n27hwib_u"/><path class="dtnj1ib4f"/></g>`,
		"fallback": "lets-icons:info-alt-light",
	});
}

export default Component;
