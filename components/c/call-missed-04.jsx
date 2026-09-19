import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/hthnzab6b.css';
import '../../css/f/ftnni96og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="hthnzab6b"/><path class="ftnni96og"/></g>`,
		"fallback": "hugeicons:call-missed-04",
	});
}

export default Component;
