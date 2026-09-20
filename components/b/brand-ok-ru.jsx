import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ycrm45b1o.css';
import '../../css/g/ge98facrb.css';
import '../../css/s/s43872z3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ycrm45b1o"/><path class="ge98facrb"/><path class="s43872z3b"/></g>`,
		"fallback": "tabler:brand-ok-ru",
	});
}

export default Component;
