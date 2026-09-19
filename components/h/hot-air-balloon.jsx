import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qw4be009v.css';
import '../../css/z/z83-cpbxu.css';
import '../../css/d/d8y4jgmap.css';
import '../../css/d/d36s5v8ph.css';
import '../../css/q/qxc99_b7n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qw4be009v"/><path class="z83-cpbxu"/><path class="d8y4jgmap"/><path class="d36s5v8ph"/><path class="qxc99_b7n"/></g>`,
		"fallback": "icon-park-solid:hot-air-balloon",
	});
}

export default Component;
