import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kq5m_jrsp.css';
import '../../css/b/b3lg4q9xa.css';
import '../../css/m/mv943cb1j.css';
import '../../css/z/z32r0tbnn.css';
import '../../css/j/jljkj-bjl.css';
import '../../css/p/p88jhsbpe.css';
import '../../css/j/j10ehyblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kq5m_jrsp wm-k"/><path class="b3lg4q9xa wm-a"/><path class="mv943cb1j wm-s"/><path class="wm-shadow z32r0tbnn"/><path class="jljkj-bjl wm-k"/><path class="p88jhsbpe wm-a"/><path class="j10ehyblf wm-s"/></g>`,
		"fallback": "withicons:clipboard-pen-engrave",
	});
}

export default Component;
