import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v18eeusxr.css';
import '../../css/z/z0wnkc8ia.css';
import '../../css/m/mmahekb9d.css';
import '../../css/p/pu-gypbfb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v18eeusxr"/><path class="z0wnkc8ia"/><path class="mmahekb9d"/><path class="pu-gypbfb"/></g>`,
		"fallback": "streamline-flex-color:cog",
	});
}

export default Component;
