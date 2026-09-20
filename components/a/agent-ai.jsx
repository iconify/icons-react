import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbgu8eb0z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbgu8eb0z"/>`,
		"fallback": "pajamas:agent-ai",
	});
}

export default Component;
