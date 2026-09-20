import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncxf18bye.css';
import '../../css/l/ld7aedbfu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncxf18bye"/><path class="ld7aedbfu"/>`,
		"fallback": "selfhst:ansible",
	});
}

export default Component;
