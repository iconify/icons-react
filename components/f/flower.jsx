import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ypa9zfx2i.css';
import '../../css/f/fqetwbcyz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ypa9zfx2i"/><path class="fqetwbcyz"/></g>`,
		"fallback": "streamline-flex:flower",
	});
}

export default Component;
