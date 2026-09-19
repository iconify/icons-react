import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eas391big.css';
import '../../css/y/y9pme5b7n.css';
import '../../css/g/gtv82xhfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eas391big"/><path class="y9pme5b7n"/><path class="gtv82xhfm"/></g>`,
		"fallback": "hugeicons:fireworks",
	});
}

export default Component;
