import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b0z4htqyr.css';
import '../../css/x/xbrdrg5rk.css';
import '../../css/h/hrb6kyb2e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b0z4htqyr"/><path class="xbrdrg5rk"/><path class="hrb6kyb2e"/></g>`,
		"fallback": "streamline-color:database-server-2-flat",
	});
}

export default Component;
