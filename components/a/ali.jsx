import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g82cs2e2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g82cs2e2y"/>`,
		"fallback": "token:ali",
	});
}

export default Component;
