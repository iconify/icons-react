import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b4kn3zb5t.css';
import '../../css/m/m17yfwb0u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b4kn3zb5t"/><path class="m17yfwb0u"/></g>`,
		"fallback": "glyphs:adjust-1",
	});
}

export default Component;
