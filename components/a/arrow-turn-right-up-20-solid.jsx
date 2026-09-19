import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itdsf40ga.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="itdsf40ga"/>`,
		"fallback": "heroicons:arrow-turn-right-up-20-solid",
	});
}

export default Component;
