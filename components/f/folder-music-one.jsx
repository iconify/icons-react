import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/oxacldbke.css';
import '../../css/d/dsln90bva.css';
import '../../css/p/plf46m9uf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="oxacldbke"/><path class="dsln90bva"/><circle class="plf46m9uf"/></g>`,
		"fallback": "icon-park-solid:folder-music-one",
	});
}

export default Component;
