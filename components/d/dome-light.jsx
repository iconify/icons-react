import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eb9t03b4i.css';
import '../../css/x/x7sf2z-_n.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="eb9t03b4i"/><path class="x7sf2z-_n"/></g>`,
		"fallback": "icon-park-solid:dome-light",
	});
}

export default Component;
