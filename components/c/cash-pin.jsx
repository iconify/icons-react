import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/spqcbsbpc.css';
import '../../css/v/v1zpq-bhq.css';
import '../../css/m/m1egr6_ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="spqcbsbpc"/><path class="v1zpq-bhq"/><path class="m1egr6_ma"/></g>`,
		"fallback": "tabler:cash-pin",
	});
}

export default Component;
