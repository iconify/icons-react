import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uekq65xzl.css';
import '../../css/h/h76v1xb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uekq65xzl"/><path class="h76v1xb1h"/></g>`,
		"fallback": "iconoir:church-alt",
	});
}

export default Component;
