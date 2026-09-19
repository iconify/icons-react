import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rc3grxbuk.css';
import '../../css/a/as_el_bcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rc3grxbuk"/><path class="as_el_bcn"/></g>`,
		"fallback": "icon-park-outline:battery-charge",
	});
}

export default Component;
