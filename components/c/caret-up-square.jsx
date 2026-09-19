import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq55bsbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq55bsbzq"/>`,
		"fallback": "bxs:caret-up-square",
	});
}

export default Component;
