import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/o-0_jrb7m.css';
import '../../css/i/iqv0tptay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="o-0_jrb7m"/><path class="iqv0tptay"/></g>`,
		"fallback": "lets-icons:cancel-duotone",
	});
}

export default Component;
