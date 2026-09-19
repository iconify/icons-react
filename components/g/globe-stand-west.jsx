import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vezelzblp.css';
import '../../css/v/v5re5yb_r.css';
import '../../css/y/yl6ayjbtu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vezelzblp"/><path class="v5re5yb_r"/><path class="yl6ayjbtu"/></g>`,
		"fallback": "glyphs:globe-stand-west",
	});
}

export default Component;
