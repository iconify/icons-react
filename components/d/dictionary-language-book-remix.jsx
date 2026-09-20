import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nubef6lvj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nubef6lvj"/>`,
		"fallback": "streamline-flex:dictionary-language-book-remix",
	});
}

export default Component;
