import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vkb2m8byg.css';
import '../../css/n/nm-6a4bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vkb2m8byg"/><path class="nm-6a4bdz"/></g>`,
		"fallback": "reicon:document-filter",
	});
}

export default Component;
