import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxklc_70n.css';
import '../../css/t/t2-7ux7cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jxklc_70n"/><path class="t2-7ux7cc"/></g>`,
		"fallback": "tabler:arrow-ramp-right-3",
	});
}

export default Component;
