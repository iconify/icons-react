import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbb1b55bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbb1b55bn"/>`,
		"fallback": "keyline-icons:app-check-sharp",
	});
}

export default Component;
