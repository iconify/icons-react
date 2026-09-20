import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4s-ztb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f4s-ztb6s"/>`,
		"fallback": "thesvg-color:claude-code",
	});
}

export default Component;
