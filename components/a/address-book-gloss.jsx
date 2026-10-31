import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp3np7bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp3np7bqo"/>`,
		"fallback": "withicons:address-book-gloss",
	});
}

export default Component;
