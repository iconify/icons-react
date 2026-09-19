import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vm5i1xbah.css';
import '../../css/f/fn9xzhb3r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vm5i1xbah"/><path class="fn9xzhb3r"/></g>`,
		"fallback": "glyphs:chevron-circle",
	});
}

export default Component;
