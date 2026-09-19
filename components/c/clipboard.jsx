import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ugraqkb-s.css';
import '../../css/u/ukr91obvv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ugraqkb-s"/><path class="ukr91obvv"/></g>`,
		"fallback": "glyphs:clipboard",
	});
}

export default Component;
