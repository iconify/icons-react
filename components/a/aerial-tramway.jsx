import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njfbn0bdj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njfbn0bdj"/>`,
		"fallback": "fluent-emoji-high-contrast:aerial-tramway",
	});
}

export default Component;
