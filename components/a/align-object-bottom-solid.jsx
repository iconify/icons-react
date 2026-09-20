import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-czv9j6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j-czv9j6t"/>`,
		"fallback": "streamline-sharp:align-object-bottom-solid",
	});
}

export default Component;
