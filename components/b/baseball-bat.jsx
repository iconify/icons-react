import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bibe-vlgo.css';
import '../../css/z/zsdijkb5a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bibe-vlgo"/><path class="zsdijkb5a"/></g>`,
		"fallback": "glyphs:baseball-bat",
	});
}

export default Component;
