import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncxwn206i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ncxwn206i"/>`,
		"fallback": "solar:dumbbell-large-outline",
	});
}

export default Component;
