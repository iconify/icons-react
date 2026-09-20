import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vfzq81bww.css';
import '../../css/d/d0exx1b-r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vfzq81bww"/><path class="d0exx1b-r"/></g>`,
		"fallback": "streamline:blood-drop-donation",
	});
}

export default Component;
