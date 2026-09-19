import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dkp5t5bjh.css';
import '../../css/h/hepxbzbrb.css';
import '../../css/l/l9tot5bbd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dkp5t5bjh"/><path class="hepxbzbrb"/><path class="l9tot5bbd"/></g>`,
		"fallback": "glyphs:folder-1",
	});
}

export default Component;
