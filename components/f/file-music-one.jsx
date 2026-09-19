import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zej0gtb4k.css';
import '../../css/s/sk8v55wcq.css';
import '../../css/n/nzzcombqn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zej0gtb4k"/><circle class="sk8v55wcq"/><path class="nzzcombqn"/></g>`,
		"fallback": "icon-park-solid:file-music-one",
	});
}

export default Component;
