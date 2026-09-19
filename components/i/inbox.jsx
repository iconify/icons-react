import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvbem4b8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvbem4b8f"/>`,
		"fallback": "bxs:inbox",
	});
}

export default Component;
