import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5z3m501d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5z3m501d"/>`,
		"fallback": "reicon:bag-happy-filled",
	});
}

export default Component;
