import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd66ni5am.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd66ni5am"/>`,
		"fallback": "fluent-emoji-high-contrast:anger-symbol",
	});
}

export default Component;
