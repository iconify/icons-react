import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj1cvqbsw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj1cvqbsw"/>`,
		"fallback": "system-uicons:calendar-split",
	});
}

export default Component;
