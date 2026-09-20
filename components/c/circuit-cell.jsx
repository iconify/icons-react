import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm0hw1g4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm0hw1g4q"/>`,
		"fallback": "tabler:circuit-cell",
	});
}

export default Component;
