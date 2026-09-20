import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl9d6f0ug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nl9d6f0ug"/>`,
		"fallback": "keyline-icons:circle-align-offset-bottom-fill",
	});
}

export default Component;
