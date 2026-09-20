import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/be3kghlmz.css';
import '../../css/t/thmgj9bfy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="be3kghlmz"/><path class="thmgj9bfy"/></g>`,
		"fallback": "streamline:cloud-share",
	});
}

export default Component;
