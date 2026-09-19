import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0jzh2cjv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0jzh2cjv"/>`,
		"fallback": "fluent-emoji-high-contrast:brown-circle",
	});
}

export default Component;
