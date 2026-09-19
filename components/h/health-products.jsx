import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/llx-aib5r.css';
import '../../css/u/u989eo7xe.css';
import '../../css/l/lcbu0h84j.css';
import '../../css/j/jdjuicczm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="llx-aib5r"/><path class="u989eo7xe"/><path class="lcbu0h84j"/><circle class="jdjuicczm"/></g>`,
		"fallback": "icon-park:health-products",
	});
}

export default Component;
