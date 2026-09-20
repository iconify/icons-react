import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uqan2szov.css';
import '../../css/k/ktn8fibyl.css';
import '../../css/p/pv4-y367n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uqan2szov"/><path class="ktn8fibyl"/><path class="pv4-y367n"/></g>`,
		"fallback": "tabler:fish",
	});
}

export default Component;
