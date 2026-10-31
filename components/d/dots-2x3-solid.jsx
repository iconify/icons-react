import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j855_w7iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j855_w7iz"/>`,
		"fallback": "sidekickicons:dots-2x3-solid",
	});
}

export default Component;
