import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/ur6eolbxm.css';
import '../../css/h/h276utioe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ur6eolbxm"/><path class="h276utioe"/></g>`,
		"fallback": "icon-park-outline:fog",
	});
}

export default Component;
