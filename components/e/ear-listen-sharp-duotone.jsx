import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/py_68ephe.css';
import '../../css/e/ekut7ylou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="py_68ephe"/><path class="ekut7ylou"/></g>`,
		"fallback": "keyline-icons:ear-listen-sharp-duotone",
	});
}

export default Component;
