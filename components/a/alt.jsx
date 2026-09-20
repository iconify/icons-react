import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uqeahgb3k.css';
import '../../css/n/n10irxuvc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uqeahgb3k"/><path class="n10irxuvc"/></g>`,
		"fallback": "streamline:alt",
	});
}

export default Component;
