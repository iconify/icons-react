import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5yjy8bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5yjy8bij"/>`,
		"fallback": "keyline-icons:chevrons-right-sharp",
	});
}

export default Component;
