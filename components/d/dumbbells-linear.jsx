import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/def6o8boc.css';
import '../../css/b/bjy7ielyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="def6o8boc"/><path class="bjy7ielyu"/></g>`,
		"fallback": "solar:dumbbells-linear",
	});
}

export default Component;
