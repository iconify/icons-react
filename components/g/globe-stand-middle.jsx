import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qyzwf4zkc.css';
import '../../css/w/wttgkpbfc.css';
import '../../css/j/jmwoe01_p.css';
import '../../css/y/y9d8ljilh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qyzwf4zkc"/><path class="wttgkpbfc"/><path class="jmwoe01_p"/><path class="y9d8ljilh"/></g>`,
		"fallback": "glyphs:globe-stand-middle",
	});
}

export default Component;
