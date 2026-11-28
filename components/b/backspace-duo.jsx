import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ita-ecckd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q3f8w2f_f.css';
import '../../css/p/pme6y6b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ita-ecckd secondary"/><g class="dt0cm9dhy primary"><path class="q3f8w2f_f"/><path class="pme6y6b3s"/></g>`,
		"fallback": "iconaut:backspace-duo",
	});
}

export default Component;
