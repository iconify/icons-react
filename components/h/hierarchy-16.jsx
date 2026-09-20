import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/litqne4ib.css';
import '../../css/j/jjtqylbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="litqne4ib"/><path class="jjtqylbsz"/></g>`,
		"fallback": "streamline-sharp-color:hierarchy-16",
	});
}

export default Component;
