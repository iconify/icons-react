import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ara_o5b7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ara_o5b7k"/>`,
		"fallback": "ri:bell-line",
	});
}

export default Component;
