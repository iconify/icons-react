import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv851mbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jv851mbmg"/>`,
		"fallback": "streamline-sharp:contact-book-remix",
	});
}

export default Component;
