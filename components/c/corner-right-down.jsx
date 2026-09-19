import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/j8xw-pqbp.css';
import '../../css/z/zrdtk9b1x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="j8xw-pqbp"/><path class="zrdtk9b1x"/></g>`,
		"fallback": "icon-park-outline:corner-right-down",
	});
}

export default Component;
