import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zmdcwir4l.css';
import '../../css/r/r4ebzz6px.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zmdcwir4l"/><path class="r4ebzz6px"/></g>`,
		"fallback": "streamline:division-circle",
	});
}

export default Component;
