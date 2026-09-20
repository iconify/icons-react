import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d6hu3bb-s.css';
import '../../css/n/nzwxjsbfh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d6hu3bb-s"/><path class="nzwxjsbfh"/></g>`,
		"fallback": "streamline-flex:hand-held-tablet-writing",
	});
}

export default Component;
