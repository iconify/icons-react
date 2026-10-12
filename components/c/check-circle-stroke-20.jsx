import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8oetz7xx.css';
import '../../css/f/fdag88jzj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8oetz7xx"/><path class="fdag88jzj"/>`,
		"fallback": "garden:check-circle-stroke-20",
	});
}

export default Component;
