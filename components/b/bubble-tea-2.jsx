import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dn8-4oblp.css';
import '../../css/t/t3hcb8b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dn8-4oblp"/><path class="t3hcb8b_l"/></g>`,
		"fallback": "tabler:bubble-tea-2",
	});
}

export default Component;
