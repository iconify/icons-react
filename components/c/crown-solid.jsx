import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh0q379oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uh0q379oy"/>`,
		"fallback": "sidekickicons:crown-solid",
	});
}

export default Component;
