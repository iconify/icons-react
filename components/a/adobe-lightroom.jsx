import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/l/llr0pfbil.css';
import '../../css/o/orz2thbaw.css';
import '../../css/k/kswva2__o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="utf5_xbzs"/><path class="llr0pfbil"/><path class="orz2thbaw"/><path class="kswva2__o"/></g>`,
		"fallback": "icon-park:adobe-lightroom",
	});
}

export default Component;
