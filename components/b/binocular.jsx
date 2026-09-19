import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kfk6dbcij.css';
import '../../css/t/thy5_2b8z.css';
import '../../css/y/ysc2kfs-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kfk6dbcij"/><path class="thy5_2b8z"/><path class="ysc2kfs-e"/></g>`,
		"fallback": "iconoir:binocular",
	});
}

export default Component;
