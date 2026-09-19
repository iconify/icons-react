import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rq-hfbc3v.css';
import '../../css/q/qzbmf2tvd.css';
import '../../css/i/i-oj57g7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rq-hfbc3v"/><path class="qzbmf2tvd"/><path class="i-oj57g7w"/></g>`,
		"fallback": "icon-park-solid:drone",
	});
}

export default Component;
