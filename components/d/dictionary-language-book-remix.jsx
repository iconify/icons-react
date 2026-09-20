import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opzsjk9an.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="opzsjk9an"/>`,
		"fallback": "streamline:dictionary-language-book-remix",
	});
}

export default Component;
