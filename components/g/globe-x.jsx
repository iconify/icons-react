import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ev035nb4c.css';
import '../../css/p/py4ujobby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ev035nb4c"/><path class="py4ujobby"/></g>`,
		"fallback": "hugeicons:globe-x",
	});
}

export default Component;
