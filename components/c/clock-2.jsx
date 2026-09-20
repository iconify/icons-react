import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qccp1j4ha.css';
import '../../css/a/a60ldi4_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qccp1j4ha"/><path class="a60ldi4_e"/></g>`,
		"fallback": "tabler:clock-2",
	});
}

export default Component;
