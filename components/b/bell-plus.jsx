import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c6snbdcwp.css';
import '../../css/a/aq738pw2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c6snbdcwp"/><path class="aq738pw2c"/></g>`,
		"fallback": "hugeicons:bell-plus",
	});
}

export default Component;
