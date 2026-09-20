import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7gie67ox.css';

const viewBox = {"width":52,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s7gie67ox"/>`,
		"fallback": "thesvg-color:cisco-light",
	});
}

export default Component;
