import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nn9ar7buo.css';
import '../../css/l/lf2hy9r6g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nn9ar7buo"/><path class="lf2hy9r6g"/></g>`,
		"fallback": "streamline-color:cellular-network-lte-flat",
	});
}

export default Component;
