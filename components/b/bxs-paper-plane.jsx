import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4e94nblv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4e94nblv"/>`,
		"fallback": "bx:bxs-paper-plane",
	});
}

export default Component;
