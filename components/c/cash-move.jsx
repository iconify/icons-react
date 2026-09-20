import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/spqcbsbpc.css';
import '../../css/y/yqd-c3bzp.css';
import '../../css/l/ltmz0zm2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="spqcbsbpc"/><path class="yqd-c3bzp"/><path class="ltmz0zm2k"/></g>`,
		"fallback": "tabler:cash-move",
	});
}

export default Component;
