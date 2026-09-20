import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vmulhkb1r.css';
import '../../css/w/w90_efw5n.css';
import '../../css/x/xmpslmb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vmulhkb1r"/><path class="w90_efw5n"/><path class="xmpslmb7r"/></g>`,
		"fallback": "tabler:backhoe",
	});
}

export default Component;
