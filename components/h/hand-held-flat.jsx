import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tm7izd6wa.css';
import '../../css/j/jx1nbccqi.css';
import '../../css/y/ysuuyabkl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tm7izd6wa"/><path class="jx1nbccqi"/><path class="ysuuyabkl"/></g>`,
		"fallback": "streamline-plump-color:hand-held-flat",
	});
}

export default Component;
