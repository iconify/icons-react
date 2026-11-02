import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl1it1boa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl1it1boa"/>`,
		"fallback": "mingcute:aquarius-line",
	});
}

export default Component;
