import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rrrrw5wgk.css';
import '../../css/b/b0jcdrlrj.css';
import '../../css/b/b44haw56m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rrrrw5wgk"/><path class="b0jcdrlrj"/><path class="b44haw56m"/></g>`,
		"fallback": "icon-park-solid:homestay",
	});
}

export default Component;
