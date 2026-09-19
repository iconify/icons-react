import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mxqh5fbhw.css';
import '../../css/v/vykt7lbkd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="mxqh5fbhw"/><path class="vykt7lbkd"/></g>`,
		"fallback": "icon-park-outline:goblet-cracking",
	});
}

export default Component;
