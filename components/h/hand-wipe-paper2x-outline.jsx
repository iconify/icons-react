import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lleu6zbks.css';
import '../../css/c/cmwq_sz7g.css';
import '../../css/n/nhl_5_bhw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lleu6zbks"/><path class="cmwq_sz7g"/><path class="nhl_5_bhw"/></g>`,
		"fallback": "healthicons:hand-wipe-paper2x-outline",
	});
}

export default Component;
