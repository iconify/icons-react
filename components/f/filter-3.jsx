import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zv07xx3ga.css';
import '../../css/z/zdxokvbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zv07xx3ga"/><path class="zdxokvbau"/></g>`,
		"fallback": "tdesign:filter-3",
	});
}

export default Component;
