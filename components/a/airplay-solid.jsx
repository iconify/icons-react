import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ymm0xacmk.css';
import '../../css/a/akhugdv9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ymm0xacmk"/><path class="akhugdv9s"/></g>`,
		"fallback": "iconoir:airplay-solid",
	});
}

export default Component;
