import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbdz0v2ph.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rbdz0v2ph"/>`,
		"fallback": "fluent-emoji-high-contrast:curly-loop",
	});
}

export default Component;
