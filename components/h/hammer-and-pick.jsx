import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctx78_e8i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctx78_e8i"/>`,
		"fallback": "fluent-emoji-high-contrast:hammer-and-pick",
	});
}

export default Component;
