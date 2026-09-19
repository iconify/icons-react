import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcp9_yb1l.css';
import '../../css/l/lgxe0o1ax.css';
import '../../css/t/tm9f74uep.css';
import '../../css/l/l_q0npboa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcp9_yb1l"/><g class="lgxe0o1ax"><circle class="tm9f74uep"/><path class="l_q0npboa"/></g>`,
		"fallback": "flat-color-icons:business-contact",
	});
}

export default Component;
