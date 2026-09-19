import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5oh21qle.css';
import '../../css/f/fweop44zq.css';
import '../../css/z/ztf5h5box.css';
import '../../css/h/hxvb2zb6c.css';
import '../../css/q/qg-npbc4r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t5oh21qle"/><path class="fweop44zq"/><path class="ztf5h5box"/><path class="hxvb2zb6c"/><path class="qg-npbc4r"/></g>`,
		"fallback": "glyphs:globe-stand-east-duo",
	});
}

export default Component;
