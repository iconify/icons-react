import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f9-sfsv6s.css';
import '../../css/g/g2lb_gbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f9-sfsv6s"/><path class="g2lb_gbna"/></g>`,
		"fallback": "tabler:clock-question",
	});
}

export default Component;
