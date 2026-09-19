import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd3mz9bes.css';
import '../../css/x/xn443qb_t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd3mz9bes"/><path class="xn443qb_t"/>`,
		"fallback": "fxemoji:heels",
	});
}

export default Component;
