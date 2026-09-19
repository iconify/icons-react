import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/myb7yfwem.css';
import '../../css/v/vgystqbcr.css';
import '../../css/l/llh36p0xj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="myb7yfwem"/><path class="vgystqbcr"/><path class="llh36p0xj"/></g>`,
		"fallback": "fluent-emoji-flat:hand-with-index-finger-and-thumb-crossed",
	});
}

export default Component;
