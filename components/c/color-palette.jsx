import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be-pwkkro.css';
import '../../css/y/y_0jyyb5c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be-pwkkro"/><path class="y_0jyyb5c"/>`,
		"fallback": "cil:color-palette",
	});
}

export default Component;
