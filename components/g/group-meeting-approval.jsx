import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j9eew5avu.css';
import '../../css/q/q05da3k-g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j9eew5avu"/><path class="q05da3k-g"/></g>`,
		"fallback": "streamline-flex:group-meeting-approval",
	});
}

export default Component;
