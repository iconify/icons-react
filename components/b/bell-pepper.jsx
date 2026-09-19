import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbiw6mb8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbiw6mb8g"/>`,
		"fallback": "fluent-emoji-high-contrast:bell-pepper",
	});
}

export default Component;
