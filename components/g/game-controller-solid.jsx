import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_fd73x_q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t_fd73x_q"/>`,
		"fallback": "teenyicons:game-controller-solid",
	});
}

export default Component;
