import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zf7hjm95t.css';
import '../../css/w/w7-r9c5xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zf7hjm95t"/><path class="w7-r9c5xo"/></g>`,
		"fallback": "iconoir:cloud-bookmark",
	});
}

export default Component;
