import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lazmpdb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lazmpdb4v"/>`,
		"fallback": "keyline-icons:grid-3x2-sharp-fill",
	});
}

export default Component;
