import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pu8x6yb5u.css';
import '../../css/o/of5m3vbai.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pu8x6yb5u"/><path class="of5m3vbai"/></g>`,
		"fallback": "streamline-flex-color:coin-share-flat",
	});
}

export default Component;
