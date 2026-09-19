import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mdy21e-7t.css';
import '../../css/c/cnn-k95xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mdy21e-7t"/><path class="cnn-k95xm"/></g>`,
		"fallback": "hugeicons:hydro-power",
	});
}

export default Component;
