import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mf4oncbfb.css';
import '../../css/a/almr0fnyn.css';
import '../../css/y/y8y_uhilr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mf4oncbfb"/><path class="almr0fnyn"/><path class="y8y_uhilr"/></g>`,
		"fallback": "glyphs:images-1",
	});
}

export default Component;
