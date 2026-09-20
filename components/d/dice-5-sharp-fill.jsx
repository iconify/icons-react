import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwlqg5-8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cwlqg5-8q"/>`,
		"fallback": "keyline-icons:dice-5-sharp-fill",
	});
}

export default Component;
