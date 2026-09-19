import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz7nwdbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jz7nwdbre"/>`,
		"fallback": "griddy-icons:address-book",
	});
}

export default Component;
