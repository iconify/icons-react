import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dz0jc1b4h.css';
import '../../css/l/lxfhy53ar.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="dz0jc1b4h"/><path class="lxfhy53ar"/></g>`,
		"fallback": "icon-park-solid:erase",
	});
}

export default Component;
