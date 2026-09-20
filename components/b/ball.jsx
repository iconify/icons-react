import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jh4v07bht.css';
import '../../css/m/mh-zam3es.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jh4v07bht"/><path class="mh-zam3es"/></g>`,
		"fallback": "streamline:ball",
	});
}

export default Component;
