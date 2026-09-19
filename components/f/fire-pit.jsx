import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rth5cebwd.css';
import '../../css/t/tq0hxla5z.css';
import '../../css/r/rq45kidda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rth5cebwd"/><path class="tq0hxla5z"/><path class="rq45kidda"/></g>`,
		"fallback": "hugeicons:fire-pit",
	});
}

export default Component;
