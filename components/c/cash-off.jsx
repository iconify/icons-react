import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sclg6dwza.css';
import '../../css/y/yl0-xxbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sclg6dwza"/><path class="yl0-xxbup"/></g>`,
		"fallback": "tabler:cash-off",
	});
}

export default Component;
