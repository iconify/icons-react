import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oge_lhbou.css';
import '../../css/b/boz1ay-3b.css';
import '../../css/p/pzb87xb0u.css';
import '../../css/k/ka48d2b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oge_lhbou"/><path class="boz1ay-3b"/><circle class="pzb87xb0u"/><path class="ka48d2b9k"/></g>`,
		"fallback": "lucide:file-search",
	});
}

export default Component;
