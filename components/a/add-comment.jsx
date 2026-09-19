import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6geo1bkk.css';
import '../../css/t/t_6ep1b_n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6geo1bkk"/><path class="t_6ep1b_n"/>`,
		"fallback": "carbon:add-comment",
	});
}

export default Component;
