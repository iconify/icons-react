import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f3croqkqz.css';
import '../../css/b/bvwrmbngr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f3croqkqz"/><path class="bvwrmbngr"/></g>`,
		"fallback": "hugeicons:hair-dryer",
	});
}

export default Component;
