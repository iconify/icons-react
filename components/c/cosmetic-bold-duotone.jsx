import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/vk-nl1ymc.css';
import '../../css/l/lj69l5bdu.css';
import '../../css/c/cxt5hpr-p.css';
import '../../css/a/a7c6hybkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="vk-nl1ymc"/><path class="lj69l5bdu"/></g><path class="cxt5hpr-p"/><path class="a7c6hybkr"/>`,
		"fallback": "solar:cosmetic-bold-duotone",
	});
}

export default Component;
