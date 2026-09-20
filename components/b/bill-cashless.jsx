import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nbexxbj8x.css';
import '../../css/b/bwzgj8btr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nbexxbj8x"/><path class="bwzgj8btr"/></g>`,
		"fallback": "streamline:bill-cashless",
	});
}

export default Component;
