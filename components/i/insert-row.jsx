import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/ifbfr1bmn.css';
import '../../css/h/h0e8vlbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ifbfr1bmn"/><path class="h0e8vlbsf"/></g>`,
		"fallback": "streamline-sharp-color:insert-row",
	});
}

export default Component;
