import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btrte8rpn.css';
import '../../css/y/yzi0pbb9t.css';
import '../../css/b/be0atoysn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="btrte8rpn"/><path class="yzi0pbb9t"/><path class="be0atoysn"/></g>`,
		"fallback": "tdesign:gesture-applause",
	});
}

export default Component;
