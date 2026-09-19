import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm31a9pfj.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm31a9pfj"/>`,
		"fallback": "fa-solid:chess-pawn",
	});
}

export default Component;
