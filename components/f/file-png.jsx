import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6a9rr47i.css';
import '../../css/t/tb27hpb1g.css';
import '../../css/e/eoj6diois.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p6a9rr47i"/><path class="tb27hpb1g"/><path class="eoj6diois"/></g>`,
		"fallback": "andrsrxn:file-png",
	});
}

export default Component;
