import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t1bzaidmv.css';
import '../../css/f/fr96r-b4z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="t1bzaidmv"/><path class="fr96r-b4z"/></g>`,
		"fallback": "icon-park-outline:dianziqian",
	});
}

export default Component;
