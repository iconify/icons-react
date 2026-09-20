import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/prseex2ik.css';
import '../../css/z/zwf8nmbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="prseex2ik"/><path class="zwf8nmbxx"/></g>`,
		"fallback": "tabler:edit",
	});
}

export default Component;
