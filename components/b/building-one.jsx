import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/ux7omubcl.css';
import '../../css/k/kn3pzwbws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="ux7omubcl"/><path class="kn3pzwbws"/></g>`,
		"fallback": "icon-park-outline:building-one",
	});
}

export default Component;
