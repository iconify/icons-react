import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh8d11bex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh8d11bex"/>`,
		"fallback": "mynaui:arrow-up-left-solid",
	});
}

export default Component;
