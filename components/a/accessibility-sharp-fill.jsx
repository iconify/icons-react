import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-nyh9bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q-nyh9bdp"/>`,
		"fallback": "keyline-icons:accessibility-sharp-fill",
	});
}

export default Component;
