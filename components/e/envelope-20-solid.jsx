import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/riy3k6lux.css';
import '../../css/n/nh539regj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="riy3k6lux"/><path class="nh539regj"/></g>`,
		"fallback": "heroicons:envelope-20-solid",
	});
}

export default Component;
