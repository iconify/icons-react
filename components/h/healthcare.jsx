import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vk93x0f7t.css';
import '../../css/i/i554-4bpa.css';
import '../../css/j/jj8-yh4_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vk93x0f7t"/><path class="i554-4bpa"/><path class="jj8-yh4_w"/></g>`,
		"fallback": "iconoir:healthcare",
	});
}

export default Component;
