import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjo48szol.css';
import '../../css/a/a5r52wb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjo48szol"/><path class="a5r52wb7q"/>`,
		"fallback": "lineicons:buildings-1",
	});
}

export default Component;
