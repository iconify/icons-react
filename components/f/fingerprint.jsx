import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z-81f5d_y.css';
import '../../css/k/kntm962du.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z-81f5d_y"/><path class="kntm962du"/></g>`,
		"fallback": "mage:fingerprint",
	});
}

export default Component;
