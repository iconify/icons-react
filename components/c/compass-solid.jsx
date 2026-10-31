import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noom4acdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="noom4acdn"/>`,
		"fallback": "sidekickicons:compass-solid",
	});
}

export default Component;
