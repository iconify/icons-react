import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gp10k3gtc.css';
import '../../css/r/rb77lkb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gp10k3gtc"/><path class="rb77lkb_u"/></g>`,
		"fallback": "coolicons:heading-2-duocolor-round",
	});
}

export default Component;
