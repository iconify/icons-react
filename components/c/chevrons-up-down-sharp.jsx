import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivzo09bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivzo09bad"/>`,
		"fallback": "keyline-icons:chevrons-up-down-sharp",
	});
}

export default Component;
