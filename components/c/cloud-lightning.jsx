import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gw5pmti4f.css';
import '../../css/r/rs0wrok6f.css';
import '../../css/c/cha5tqklr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gw5pmti4f"/><path class="rs0wrok6f"/><path class="cha5tqklr"/></g>`,
		"fallback": "andrsrxn:cloud-lightning",
	});
}

export default Component;
