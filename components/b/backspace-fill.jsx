import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae9euyb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ae9euyb_y"/>`,
		"fallback": "iconamoon:backspace-fill",
	});
}

export default Component;
