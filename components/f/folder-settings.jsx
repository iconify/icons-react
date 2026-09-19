import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kr1jb4bit.css';
import '../../css/b/bu32m9wsb.css';
import '../../css/p/p6__3lblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kr1jb4bit"/><path class="bu32m9wsb"/><path class="p6__3lblo"/></g>`,
		"fallback": "iconoir:folder-settings",
	});
}

export default Component;
