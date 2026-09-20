import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4ba7qyjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4ba7qyjg"/>`,
		"fallback": "ri:align-bottom",
	});
}

export default Component;
