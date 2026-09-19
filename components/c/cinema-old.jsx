import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t8bvvpe-k.css';
import '../../css/a/aksvigh9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t8bvvpe-k"/><path class="aksvigh9o"/></g>`,
		"fallback": "iconoir:cinema-old",
	});
}

export default Component;
