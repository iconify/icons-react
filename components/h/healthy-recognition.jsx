import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rm8wk1b8h.css';
import '../../css/a/aal9x10ga.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rm8wk1b8h"/><path class="aal9x10ga"/></g>`,
		"fallback": "icon-park-solid:healthy-recognition",
	});
}

export default Component;
