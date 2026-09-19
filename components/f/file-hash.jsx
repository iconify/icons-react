import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/euce6ob-r.css';
import '../../css/p/pv2ur-63o.css';
import '../../css/k/kkzgfy8qv.css';
import '../../css/h/hp_i4jbib.css';
import '../../css/g/g8vdyobvm.css';
import '../../css/w/wm7z6m_wg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="euce6ob-r"/><path class="pv2ur-63o"/><path class="kkzgfy8qv"/><path class="hp_i4jbib"/><path class="g8vdyobvm"/><path class="wm7z6m_wg"/></g>`,
		"fallback": "icon-park:file-hash",
	});
}

export default Component;
