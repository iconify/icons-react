import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x6_u8dk8t.css';
import '../../css/p/p70zy7b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x6_u8dk8t"/><path class="p70zy7b3o"/></g>`,
		"fallback": "hugeicons:file-music",
	});
}

export default Component;
