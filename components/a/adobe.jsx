import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/owa3hhbvq.css';
import '../../css/z/z6m-8kb5r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="owa3hhbvq"/><path class="z6m-8kb5r"/></g>`,
		"fallback": "streamline:adobe",
	});
}

export default Component;
