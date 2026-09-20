import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d2fun1bgb.css';
import '../../css/r/rk4t957vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d2fun1bgb"/><path class="rk4t957vw"/></g>`,
		"fallback": "lucide-lab:bacon",
	});
}

export default Component;
