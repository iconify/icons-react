import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/ualx4gbii.css';
import '../../css/n/naha7nbni.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ualx4gbii"/><path class="naha7nbni"/></g>`,
		"fallback": "icon-park-solid:fork-spoon",
	});
}

export default Component;
