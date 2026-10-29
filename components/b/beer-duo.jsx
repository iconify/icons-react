import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gpylk-uae.css';
import '../../css/v/vp02ces9z.css';
import '../../css/q/qwrl1299h.css';
import '../../css/t/tp8x2imva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gpylk-uae wm-a"/><path class="vp02ces9z wm-a"/><path class="qwrl1299h"/><path class="tp8x2imva wm-a"/></g>`,
		"fallback": "withicons:beer-duo",
	});
}

export default Component;
