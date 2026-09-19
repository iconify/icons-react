import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4y4hbm4d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f4y4hbm4d"/>`,
		"fallback": "heroicons:arrow-turn-up-right-16-solid",
	});
}

export default Component;
