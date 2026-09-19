import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m99s_db5h.css';
import '../../css/j/jz1kv-49a.css';

const viewBox = {"width":21,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m99s_db5h"/><path class="jz1kv-49a"/></g>`,
		"fallback": "et:hourglass",
	});
}

export default Component;
