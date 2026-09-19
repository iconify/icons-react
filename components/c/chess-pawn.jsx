import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_59zsbpb.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_59zsbpb"/>`,
		"fallback": "fa6-regular:chess-pawn",
	});
}

export default Component;
