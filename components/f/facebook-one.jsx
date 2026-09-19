import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y0qazqbcv.css';
import '../../css/k/k3dstcbyk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y0qazqbcv"/><path class="k3dstcbyk"/></g>`,
		"fallback": "icon-park-outline:facebook-one",
	});
}

export default Component;
