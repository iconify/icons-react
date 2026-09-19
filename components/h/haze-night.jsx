import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y84bdgn_e.css';
import '../../css/d/dw5u3v8yx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y84bdgn_e"/><path class="dw5u3v8yx"/>`,
		"fallback": "carbon:haze-night",
	});
}

export default Component;
