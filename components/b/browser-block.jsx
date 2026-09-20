import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wjrfwr7ez.css';
import '../../css/j/ji6ipkbhq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wjrfwr7ez"/><path class="ji6ipkbhq"/></g>`,
		"fallback": "streamline:browser-block",
	});
}

export default Component;
