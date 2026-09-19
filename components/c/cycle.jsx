import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hz6y9rjmh.css';
import '../../css/n/nqjci9b_n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hz6y9rjmh"/><path class="nqjci9b_n"/></g>`,
		"fallback": "icon-park-outline:cycle",
	});
}

export default Component;
