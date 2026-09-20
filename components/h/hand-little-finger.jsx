import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g2740tsqa.css';
import '../../css/w/w7i5ambvj.css';
import '../../css/x/xk_m4rpyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g2740tsqa"/><path class="w7i5ambvj"/><path class="xk_m4rpyh"/></g>`,
		"fallback": "tabler:hand-little-finger",
	});
}

export default Component;
