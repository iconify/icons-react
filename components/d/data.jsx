import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zd1deebgz.css';
import '../../css/w/w8aqjtb4l.css';
import '../../css/h/h9c6fsb7e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zd1deebgz"/><path class="w8aqjtb4l"/><ellipse class="h9c6fsb7e"/></g>`,
		"fallback": "icon-park-solid:data",
	});
}

export default Component;
