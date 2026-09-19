import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mw8335xum.css';
import '../../css/t/t96avbcnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mw8335xum"/><path class="t96avbcnq"/></g>`,
		"fallback": "hugeicons:hotdog",
	});
}

export default Component;
