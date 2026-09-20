import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k82466n8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k82466n8p"/>`,
		"fallback": "ri:bug-fill",
	});
}

export default Component;
