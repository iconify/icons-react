import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lr5ebea-a.css';
import '../../css/i/iddrhtujz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lr5ebea-a"/><path class="iddrhtujz"/></g>`,
		"fallback": "hugeicons:clock-fading",
	});
}

export default Component;
