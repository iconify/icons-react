import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v22tkuj_m.css';
import '../../css/n/n1l58wtxn.css';
import '../../css/h/h-9fzqies.css';
import '../../css/v/vsusckuge.css';
import '../../css/v/vryyh5bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v22tkuj_m"/><path class="n1l58wtxn"/><path class="h-9fzqies wm-a"/><path class="vsusckuge"/><path class="vryyh5bgx"/></g>`,
		"fallback": "withicons:avatar-dog-duo",
	});
}

export default Component;
