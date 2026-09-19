import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xvaisgb6l.css';
import '../../css/p/p8rpo9bbl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xvaisgb6l"/><path class="p8rpo9bbl"/></g>`,
		"fallback": "icon-park-outline:credit",
	});
}

export default Component;
