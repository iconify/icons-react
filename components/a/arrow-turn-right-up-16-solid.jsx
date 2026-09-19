import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz778umpv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rz778umpv"/>`,
		"fallback": "heroicons:arrow-turn-right-up-16-solid",
	});
}

export default Component;
