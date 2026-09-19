import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh7bkzblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mh7bkzblb"/>`,
		"fallback": "basil:fast-forward-outline",
	});
}

export default Component;
