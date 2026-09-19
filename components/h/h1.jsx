import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca7fx22mt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca7fx22mt"/>`,
		"fallback": "codex:h1",
	});
}

export default Component;
