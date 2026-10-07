import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xij_vf5mk.css';
import '../../css/w/w25sab5uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xij_vf5mk"/><path class="w25sab5uh"/></g>`,
		"fallback": "tabler:alphabet-georgian",
	});
}

export default Component;
