import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn_05tynm.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/ah45prb2d.css';
import '../../css/e/en7qtqbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn_05tynm"/><g class="xtpeb-edw"><path class="ah45prb2d"/><path class="en7qtqbkh"/></g>`,
		"fallback": "solar:black-hole-3-bold-duotone",
	});
}

export default Component;
