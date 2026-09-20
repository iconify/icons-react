import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxxnz6b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxxnz6b3s"/>`,
		"fallback": "keyline-icons:circles",
	});
}

export default Component;
