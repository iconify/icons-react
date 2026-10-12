import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/po8qfcb6i.css';
import '../../css/o/oe54axb1m.css';
import '../../css/a/afgy0eb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="po8qfcb6i"/><path class="oe54axb1m"/><path class="afgy0eb3x"/></g>`,
		"fallback": "andrsrxn:clock-twelve",
	});
}

export default Component;
