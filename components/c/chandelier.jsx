import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cxmyj8bgd.css';
import '../../css/s/s1b-nrbws.css';
import '../../css/r/ra7dc2bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cxmyj8bgd"/><path class="s1b-nrbws"/><path class="ra7dc2bic"/></g>`,
		"fallback": "andrsrxn:chandelier",
	});
}

export default Component;
