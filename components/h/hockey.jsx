import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/m/mkqqvp-zu.css';
import '../../css/f/fblylw2ot.css';
import '../../css/x/xlcp1d9yz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="mkqqvp-zu"/><path class="fblylw2ot"/><path class="xlcp1d9yz"/></g>`,
		"fallback": "icon-park-solid:hockey",
	});
}

export default Component;
