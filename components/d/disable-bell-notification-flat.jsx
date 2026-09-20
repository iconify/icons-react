import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t2m5w2vpw.css';
import '../../css/t/tioybzb0x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t2m5w2vpw"/><path class="tioybzb0x"/></g>`,
		"fallback": "streamline-flex-color:disable-bell-notification-flat",
	});
}

export default Component;
