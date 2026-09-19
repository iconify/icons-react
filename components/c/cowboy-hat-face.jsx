import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ng9mn-bjb.css';
import '../../css/n/nmb_fvfch.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ng9mn-bjb"/><path class="nmb_fvfch"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cowboy-hat-face",
	});
}

export default Component;
