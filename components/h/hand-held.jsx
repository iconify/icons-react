import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/q70smac0j.css';
import '../../css/k/kcm93prbq.css';
import '../../css/p/p1mwtgbkm.css';
import '../../css/l/lq_kzjnfn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="q70smac0j"/><path class="kcm93prbq"/><path class="p1mwtgbkm"/><path class="lq_kzjnfn"/></g>`,
		"fallback": "streamline-plump-color:hand-held",
	});
}

export default Component;
