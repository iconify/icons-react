import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lt79-dbim.css';
import '../../css/y/ywprslb-b.css';
import '../../css/d/dup_gbchp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lt79-dbim"/><path class="ywprslb-b"/><path clip-rule="evenodd" class="dup_gbchp"/></g>`,
		"fallback": "reicon:globe2-filled",
	});
}

export default Component;
