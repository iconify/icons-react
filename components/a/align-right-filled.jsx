import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi62yk3_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zi62yk3_t"/>`,
		"fallback": "griddy-icons:align-right-filled",
	});
}

export default Component;
