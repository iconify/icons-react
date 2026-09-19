import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/a/a1qy3pb2q.css';
import '../../css/e/elttmdb8p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="r8cyu3bwz"/><rect class="a1qy3pb2q"/><path class="elttmdb8p"/></g>`,
		"fallback": "icon-park-outline:f-zero-key",
	});
}

export default Component;
