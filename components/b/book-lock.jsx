import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b1i2rcbtn.css';
import '../../css/o/oi3ksybya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b1i2rcbtn"/><path class="oi3ksybya"/></g>`,
		"fallback": "hugeicons:book-lock",
	});
}

export default Component;
