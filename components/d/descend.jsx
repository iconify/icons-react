import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/m2sizbben.css';
import '../../css/o/osm-1gbrp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="m2sizbben"/><path class="osm-1gbrp"/></g>`,
		"fallback": "icon-park-outline:descend",
	});
}

export default Component;
