import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v6zxihb8r.css';
import '../../css/t/t_oy9f_6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v6zxihb8r"/><path class="t_oy9f_6p"/></g>`,
		"fallback": "tabler:device-tablet-up",
	});
}

export default Component;
