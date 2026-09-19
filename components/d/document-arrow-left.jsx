import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/li1v_zb8r.css';
import '../../css/z/z_2v4d0aa.css';
import '../../css/v/v0ddqabxq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="li1v_zb8r"/><path class="z_2v4d0aa"/><path class="v0ddqabxq"/></g>`,
		"fallback": "si-glyph:document-arrow-left",
	});
}

export default Component;
