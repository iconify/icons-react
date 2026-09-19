import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uwm990bfs.css';
import '../../css/g/g56i7m6rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uwm990bfs"/><path class="g56i7m6rn"/></g>`,
		"fallback": "hugeicons:arrow-move-up-right",
	});
}

export default Component;
