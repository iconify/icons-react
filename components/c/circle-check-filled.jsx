import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e65egtbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e65egtbyf"/>`,
		"fallback": "tabler:circle-check-filled",
	});
}

export default Component;
