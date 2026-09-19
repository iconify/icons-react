import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwq5i-s2c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwq5i-s2c"/>`,
		"fallback": "fluent-emoji-high-contrast:exclamation-question-mark",
	});
}

export default Component;
