import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sr9yokbre.css';
import '../../css/k/kd1rx8bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sr9yokbre"/><path class="kd1rx8bnr"/></g>`,
		"fallback": "solar:bone-crack-linear",
	});
}

export default Component;
