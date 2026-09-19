import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ymm0xacmk.css';
import '../../css/z/z0uaywb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ymm0xacmk"/><path class="z0uaywb5w"/></g>`,
		"fallback": "iconoir:airplay",
	});
}

export default Component;
