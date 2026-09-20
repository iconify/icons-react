import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rr5akkp2z.css';
import '../../css/l/l09j8mwmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rr5akkp2z"/><path class="l09j8mwmw"/></g>`,
		"fallback": "tabler:clock-down",
	});
}

export default Component;
