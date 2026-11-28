import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay8f92b_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay8f92b_a"/>`,
		"fallback": "noviair-light:chess-queen",
	});
}

export default Component;
