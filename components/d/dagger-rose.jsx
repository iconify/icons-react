import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0v512beq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0v512beq"/>`,
		"fallback": "game-icons:dagger-rose",
	});
}

export default Component;
