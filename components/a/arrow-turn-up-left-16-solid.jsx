import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jacuf9bym.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jacuf9bym"/>`,
		"fallback": "heroicons:arrow-turn-up-left-16-solid",
	});
}

export default Component;
