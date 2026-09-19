import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vor0eyoyz.css';
import '../../css/h/hnhmf1b1t.css';
import '../../css/i/i-unjrbqs.css';
import '../../css/o/o64dbibmw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vor0eyoyz"/><path class="hnhmf1b1t"/><path class="i-unjrbqs"/><path clip-rule="evenodd" class="o64dbibmw"/></g>`,
		"fallback": "healthicons:antibody-outline",
	});
}

export default Component;
