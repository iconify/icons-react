import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wm942dgda.css';
import '../../css/l/l9og8mbwg.css';
import '../../css/c/cnfz1eblz.css';
import '../../css/t/tbtj4gjka.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm942dgda"/><path class="l9og8mbwg"/><path class="cnfz1eblz"/><path class="tbtj4gjka"/></g>`,
		"fallback": "icon-park-solid:handbag",
	});
}

export default Component;
