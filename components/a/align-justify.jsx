import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzrc6-c5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzrc6-c5z"/>`,
		"fallback": "codex:align-justify",
	});
}

export default Component;
