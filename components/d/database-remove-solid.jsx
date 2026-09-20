import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9ffhot1b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c9ffhot1b"/>`,
		"fallback": "streamline:database-remove-solid",
	});
}

export default Component;
