import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1irycc-s.css';
import '../../css/k/ktxr1u0rx.css';
import '../../css/e/e82etfbzy.css';
import '../../css/u/uujeagbzt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b1irycc-s"/><path class="ktxr1u0rx"/><path class="e82etfbzy"/><path class="uujeagbzt"/></g>`,
		"fallback": "icon-park:headphone-sound",
	});
}

export default Component;
