import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0t4ebqbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0t4ebqbh"/>`,
		"fallback": "mynaui:fat-corner-up-right",
	});
}

export default Component;
