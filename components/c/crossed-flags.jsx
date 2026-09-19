import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfux_ebdp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfux_ebdp"/>`,
		"fallback": "fluent-emoji-high-contrast:crossed-flags",
	});
}

export default Component;
