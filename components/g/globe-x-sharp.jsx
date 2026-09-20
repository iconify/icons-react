import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5trom0ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5trom0ak"/>`,
		"fallback": "keyline-icons:globe-x-sharp",
	});
}

export default Component;
