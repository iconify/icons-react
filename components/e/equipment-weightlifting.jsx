import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uoqec7bty.css';
import '../../css/a/an01lk05r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uoqec7bty"/><path class="an01lk05r"/></g>`,
		"fallback": "hugeicons:equipment-weightlifting",
	});
}

export default Component;
