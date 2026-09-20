import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md5fkyy9p.css';
import '../../css/w/ws35vdbar.css';
import '../../css/q/qcxo374xz.css';
import '../../css/o/ouybwccsi.css';
import '../../css/a/abxrhfy5t.css';
import '../../css/z/zmkur8bnx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md5fkyy9p"/><path class="ws35vdbar"/><path class="qcxo374xz"/><g class="ouybwccsi"><path class="abxrhfy5t"/><path class="zmkur8bnx"/></g>`,
		"fallback": "openmoji:crayon",
	});
}

export default Component;
