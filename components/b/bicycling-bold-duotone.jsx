import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk_-8fblw.css';
import '../../css/n/ny9p4jbcy.css';
import '../../css/q/qe32f93df.css';
import '../../css/l/ly0fd4b1i.css';
import '../../css/l/lyfl-t8ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk_-8fblw"/><path clip-rule="evenodd" class="ny9p4jbcy"/><g clip-rule="evenodd" class="qe32f93df"><path class="ly0fd4b1i"/><path class="lyfl-t8ti"/></g>`,
		"fallback": "solar:bicycling-bold-duotone",
	});
}

export default Component;
