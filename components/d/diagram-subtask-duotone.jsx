import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bciy_pr0x.css';
import '../../css/c/cql2_e1mc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bciy_pr0x"/><path class="cql2_e1mc"/></g>`,
		"fallback": "keyline-icons:diagram-subtask-duotone",
	});
}

export default Component;
