import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u399v6e6v.css';
import '../../css/u/u93wto46y.css';
import '../../css/x/xxy0vkf3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 20.9 21.81)" class="u399v6e6v"/><path class="u93wto46y"/><path class="xxy0vkf3s"/></g>`,
		"fallback": "andrsrxn:cooking-pot",
	});
}

export default Component;
