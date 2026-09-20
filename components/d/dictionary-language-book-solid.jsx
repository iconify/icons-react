import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gir5-qiqe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gir5-qiqe"/>`,
		"fallback": "streamline-flex:dictionary-language-book-solid",
	});
}

export default Component;
