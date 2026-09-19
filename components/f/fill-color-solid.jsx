import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hqkfeobqj.css';
import '../../css/e/e81n7dqey.css';
import '../../css/b/bo7xhxbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hqkfeobqj"/><path class="e81n7dqey"/><path clip-rule="evenodd" class="bo7xhxbdg"/></g>`,
		"fallback": "iconoir:fill-color-solid",
	});
}

export default Component;
