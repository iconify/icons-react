import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku5-asgud.css';
import '../../css/h/hy5jsbbuj.css';
import '../../css/t/t32f0z35j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku5-asgud"/><path class="hy5jsbbuj"/><path class="t32f0z35j"/>`,
		"fallback": "token:dego",
	});
}

export default Component;
