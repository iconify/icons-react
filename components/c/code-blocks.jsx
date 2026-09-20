import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziaa1cqwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziaa1cqwu"/>`,
		"fallback": "thesvg-color:code-blocks",
	});
}

export default Component;
