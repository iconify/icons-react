import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk_xkpb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rk_xkpb3i"/>`,
		"fallback": "streamline-sharp:contact-book-solid",
	});
}

export default Component;
