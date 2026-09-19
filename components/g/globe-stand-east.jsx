import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hph-hdb6r.css';
import '../../css/s/sk475u2ut.css';
import '../../css/d/dth2xsb7w.css';
import '../../css/x/x3sxpnbgb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hph-hdb6r"/><path class="sk475u2ut"/><path class="dth2xsb7w"/><path class="x3sxpnbgb"/></g>`,
		"fallback": "glyphs:globe-stand-east",
	});
}

export default Component;
