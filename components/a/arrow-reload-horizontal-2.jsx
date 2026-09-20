import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/el6yxyw-a.css';
import '../../css/w/wh8537bck.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="el6yxyw-a"/><path class="wh8537bck"/></g>`,
		"fallback": "streamline:arrow-reload-horizontal-2",
	});
}

export default Component;
