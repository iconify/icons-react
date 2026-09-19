import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h5tyyqhes.css';
import '../../css/e/efmcsd_5s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h5tyyqhes"/><path class="efmcsd_5s"/></g>`,
		"fallback": "glyphs:baseball-duo",
	});
}

export default Component;
