import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_o07-b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_o07-b6g"/>`,
		"fallback": "ri:code-block",
	});
}

export default Component;
