import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k7090e5pj.css';
import '../../css/h/hxruvww_f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k7090e5pj"/><path class="hxruvww_f"/></g>`,
		"fallback": "streamline:diamond-2",
	});
}

export default Component;
