import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_87rhb6e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t_87rhb6e"/>`,
		"fallback": "glyphs:hash-outline",
	});
}

export default Component;
