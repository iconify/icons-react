import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q39_z9bzg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q39_z9bzg"/>`,
		"fallback": "fluent-emoji-high-contrast:check-mark",
	});
}

export default Component;
