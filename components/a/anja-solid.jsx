import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg84oub9d.css';
import '../../css/u/udvwo6blt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg84oub9d"/><path clip-rule="evenodd" class="udvwo6blt"/>`,
		"fallback": "teenyicons:anja-solid",
	});
}

export default Component;
