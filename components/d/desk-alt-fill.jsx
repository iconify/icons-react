import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7fle5b6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u7fle5b6p"/>`,
		"fallback": "lets-icons:desk-alt-fill",
	});
}

export default Component;
