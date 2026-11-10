import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ak0ph-cgo.css';
import '../../css/r/r52fjybre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ak0ph-cgo"/><path class="r52fjybre"/></g>`,
		"fallback": "andrsrxn:barricade",
	});
}

export default Component;
