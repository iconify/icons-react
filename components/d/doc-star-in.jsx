import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lkliae68h.css';
import '../../css/c/ck_on5t5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lkliae68h"/><path class="ck_on5t5h"/></g>`,
		"fallback": "iconoir:doc-star-in",
	});
}

export default Component;
