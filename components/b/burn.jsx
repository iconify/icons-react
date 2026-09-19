import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/ggx9vpblp.css';
import '../../css/w/wck7usbxf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ggx9vpblp"/><path class="wck7usbxf"/></g>`,
		"fallback": "glyphs:burn",
	});
}

export default Component;
