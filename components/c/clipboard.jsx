import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg4h3hbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jg4h3hbol"/>`,
		"fallback": "reicon:clipboard",
	});
}

export default Component;
