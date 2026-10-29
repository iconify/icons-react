import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/imwen_b-s.css';
import '../../css/r/rya3_nbji.css';
import '../../css/s/spbohtbnc.css';
import '../../css/e/ea-ti7goz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="imwen_b-s"/><path class="rya3_nbji wm-a"/><path class="spbohtbnc"/><path class="ea-ti7goz wm-a"/></g>`,
		"fallback": "withicons:backpack-duo",
	});
}

export default Component;
