import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gulqfdbmc.css';
import '../../css/p/pcju9-b5h.css';
import '../../css/g/gk9ls50fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gulqfdbmc"/><path class="pcju9-b5h"/><path class="gk9ls50fi"/></g>`,
		"fallback": "tdesign:gift",
	});
}

export default Component;
