import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mjxbo3b5b.css';
import '../../css/h/hxrgfiruz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mjxbo3b5b"/><path class="hxrgfiruz"/></g>`,
		"fallback": "streamline-flex-color:bicycle-bike-flat",
	});
}

export default Component;
