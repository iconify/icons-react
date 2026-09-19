import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lmxkc6yly.css';
import '../../css/f/ftopu8bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lmxkc6yly"/><path class="ftopu8bmx"/></g>`,
		"fallback": "hugeicons:amphora",
	});
}

export default Component;
