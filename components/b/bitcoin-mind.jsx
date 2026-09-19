import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jvkw6ljnc.css';
import '../../css/j/jx9d4ybnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jvkw6ljnc"/><path class="jx9d4ybnz"/></g>`,
		"fallback": "hugeicons:bitcoin-mind",
	});
}

export default Component;
