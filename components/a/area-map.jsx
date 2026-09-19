import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qmemh9vak.css';
import '../../css/g/gazpy_epd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qmemh9vak"/><path class="gazpy_epd"/></g>`,
		"fallback": "icon-park-outline:area-map",
	});
}

export default Component;
