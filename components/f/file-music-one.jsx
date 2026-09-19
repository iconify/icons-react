import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zej0gtb4k.css';
import '../../css/b/bh6yb2ltz.css';
import '../../css/n/nzzcombqn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zej0gtb4k"/><circle class="bh6yb2ltz"/><path class="nzzcombqn"/></g>`,
		"fallback": "icon-park-outline:file-music-one",
	});
}

export default Component;
