import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0v_3bbnj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c0v_3bbnj"/>`,
		"fallback": "streamline-flex:contact-phonebook-2-remix",
	});
}

export default Component;
