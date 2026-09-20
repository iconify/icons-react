import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pubb39zck.css';
import '../../css/l/lgi6m3_tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pubb39zck"/><path class="lgi6m3_tq"/></g>`,
		"fallback": "tabler:calendar-pin",
	});
}

export default Component;
