import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gynbqr-dq.css';
import '../../css/b/bc12dyb7h.css';
import '../../css/i/imc2uccfr.css';
import '../../css/i/i0917pbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gynbqr-dq"/><path class="bc12dyb7h"/><path class="imc2uccfr"/><path class="i0917pbrr"/></g>`,
		"fallback": "iconaut:crutch",
	});
}

export default Component;
