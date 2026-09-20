import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blkkphbjx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="blkkphbjx"/>`,
		"fallback": "streamline-flex:definition-search-book-remix",
	});
}

export default Component;
