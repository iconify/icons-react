import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkhxtabzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fkhxtabzr"/>`,
		"fallback": "gg:arrow-long-right-c",
	});
}

export default Component;
