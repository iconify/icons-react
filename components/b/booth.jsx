import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/posz-uy-t.css';
import '../../css/k/k6sx21i-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="posz-uy-t"/><path class="k6sx21i-s"/></g>`,
		"fallback": "icon-park-solid:booth",
	});
}

export default Component;
