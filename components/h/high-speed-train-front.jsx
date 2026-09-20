import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/geta3hb1h.css';
import '../../css/v/vpkv06boy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="geta3hb1h"/><path class="vpkv06boy"/></g>`,
		"fallback": "streamline:high-speed-train-front",
	});
}

export default Component;
