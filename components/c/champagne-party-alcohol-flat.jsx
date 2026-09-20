import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zz3fbdc5n.css';
import '../../css/m/mkqneacpo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zz3fbdc5n"/><path class="mkqneacpo"/></g>`,
		"fallback": "streamline-color:champagne-party-alcohol-flat",
	});
}

export default Component;
