import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mey0rqboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mey0rqboh"/>`,
		"fallback": "mingcute:department-line",
	});
}

export default Component;
