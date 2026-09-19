import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/ry75hqbrt.css';
import '../../css/f/f77y4qmye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ry75hqbrt"/><path class="f77y4qmye"/></g>`,
		"fallback": "hugeicons:anonymous",
	});
}

export default Component;
