import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj80fbt_q.css';
import '../../css/t/t_1qkzbho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj80fbt_q"/><path class="t_1qkzbho"/>`,
		"fallback": "pixel:ad-solid",
	});
}

export default Component;
