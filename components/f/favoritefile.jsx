import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai9gbgf5w.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai9gbgf5w"/>`,
		"fallback": "whh:favoritefile",
	});
}

export default Component;
