import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1u9eup1x.css';
import '../../css/r/r9fqp1b2x.css';
import '../../css/s/sd2hi88nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j1u9eup1x"/><path class="r9fqp1b2x"/><path class="sd2hi88nf"/></g>`,
		"fallback": "tabler:database-cancel",
	});
}

export default Component;
