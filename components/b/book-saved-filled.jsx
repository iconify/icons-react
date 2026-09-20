import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqv5sccyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqv5sccyg"/>`,
		"fallback": "reicon:book-saved-filled",
	});
}

export default Component;
